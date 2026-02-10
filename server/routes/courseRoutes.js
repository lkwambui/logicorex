import express from "express";
import Course from "../models/Course.js";
import { requireAdmin } from "../middleware/auth.js";

const router = express.Router();

const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

router.get("/", async (req, res) => {
  const { published, category } = req.query;
  const filter = {};
  if (published === "true") filter.published = true;
  if (category) filter.category = category;

  const courses = await Course.find(filter).sort({ createdAt: -1 });
  res.json(courses);
});

router.get("/:slug", async (req, res) => {
  const course = await Course.findOne({ slug: req.params.slug });
  if (!course) return res.status(404).json({ message: "Course not found" });
  res.json(course);
});

router.post("/", requireAdmin, async (req, res) => {
  const data = req.body;
  const slug = data.slug ? slugify(data.slug) : slugify(data.title || "");
  const course = await Course.create({ ...data, slug });
  res.status(201).json(course);
});

router.put("/:slug", requireAdmin, async (req, res) => {
  const data = req.body;
  if (data.slug) data.slug = slugify(data.slug);
  const course = await Course.findOneAndUpdate({ slug: req.params.slug }, data, {
    new: true,
  });
  if (!course) return res.status(404).json({ message: "Course not found" });
  res.json(course);
});

router.delete("/:slug", requireAdmin, async (req, res) => {
  const course = await Course.findOneAndDelete({ slug: req.params.slug });
  if (!course) return res.status(404).json({ message: "Course not found" });
  res.json({ message: "Course deleted" });
});

export default router;
