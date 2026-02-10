import express from "express";
import BlogPost from "../models/BlogPost.js";
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
  const { published } = req.query;
  const filter = {};
  if (published === "true") filter.published = true;

  const posts = await BlogPost.find(filter).sort({ createdAt: -1 });
  res.json(posts);
});

router.get("/:slug", async (req, res) => {
  const post = await BlogPost.findOne({ slug: req.params.slug });
  if (!post) return res.status(404).json({ message: "Blog post not found" });
  res.json(post);
});

router.post("/", requireAdmin, async (req, res) => {
  const data = req.body;
  const slug = data.slug ? slugify(data.slug) : slugify(data.title || "");
  const post = await BlogPost.create({ ...data, slug });
  res.status(201).json(post);
});

router.put("/:slug", requireAdmin, async (req, res) => {
  const data = req.body;
  if (data.slug) data.slug = slugify(data.slug);
  const post = await BlogPost.findOneAndUpdate({ slug: req.params.slug }, data, {
    new: true,
  });
  if (!post) return res.status(404).json({ message: "Blog post not found" });
  res.json(post);
});

router.delete("/:slug", requireAdmin, async (req, res) => {
  const post = await BlogPost.findOneAndDelete({ slug: req.params.slug });
  if (!post) return res.status(404).json({ message: "Blog post not found" });
  res.json({ message: "Blog post deleted" });
});

export default router;
