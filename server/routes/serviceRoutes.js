import express from "express";
import Service from "../models/Service.js";
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
  const services = await Service.find({ isActive: true }).sort({ createdAt: -1 });
  res.json(services);
});

router.post("/", requireAdmin, async (req, res) => {
  const data = req.body;
  const slug = data.slug ? slugify(data.slug) : slugify(data.name || "");
  const service = await Service.create({ ...data, slug });
  res.status(201).json(service);
});

router.put("/:slug", requireAdmin, async (req, res) => {
  const data = req.body;
  if (data.slug) data.slug = slugify(data.slug);
  const service = await Service.findOneAndUpdate({ slug: req.params.slug }, data, {
    new: true,
  });
  if (!service) return res.status(404).json({ message: "Service not found" });
  res.json(service);
});

router.delete("/:slug", requireAdmin, async (req, res) => {
  const service = await Service.findOneAndDelete({ slug: req.params.slug });
  if (!service) return res.status(404).json({ message: "Service not found" });
  res.json({ message: "Service deleted" });
});

export default router;
