import express from "express";
import BlogPost from "../models/BlogPost.js";
import { requireAdmin } from "../middleware/auth.js";
import multer from "multer";
import path from "path";

// Multer setup for file uploads
// Use import.meta.url to get __dirname equivalent in ES modules
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const base = path.basename(file.originalname, ext);
    cb(null, base + '-' + Date.now() + ext);
  },
});
const upload = multer({ storage });

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


// Blog create with file upload
router.post("/", requireAdmin, upload.single("coverImage"), async (req, res) => {
  try {
    const data = req.body;
    if (req.file) {
      data.coverImage = `/uploads/${req.file.filename}`;
    }
    // tags: if sent as comma string, convert to array
    if (typeof data.tags === "string") {
      data.tags = data.tags.split(",").map(t => t.trim()).filter(Boolean);
    }
    const slug = data.slug ? slugify(data.slug) : slugify(data.title || "");
    const post = await BlogPost.create({ ...data, slug });
    res.status(201).json(post);
  } catch (err) {
    console.error("Blog create error:", err);
    res.status(500).json({ message: err.message || "Failed to create blog" });
  }
});


// Blog update with file upload

router.put("/:slug", requireAdmin, upload.single("coverImage"), async (req, res) => {
  try {
    const data = req.body;
    if (req.file) {
      data.coverImage = `/uploads/${req.file.filename}`;
    }
    // tags: if sent as comma string, convert to array
    if (typeof data.tags === "string") {
      data.tags = data.tags.split(",").map(t => t.trim()).filter(Boolean);
    }
    if (data.slug) data.slug = slugify(data.slug);
    const post = await BlogPost.findOneAndUpdate({ slug: req.params.slug }, data, {
      new: true,
    });
    if (!post) return res.status(404).json({ message: "Blog post not found" });
    res.json(post);
  } catch (err) {
    console.error("Blog update error:", err);
    res.status(500).json({ message: err.message || "Failed to update blog" });
  }
});

router.delete("/:slug", requireAdmin, async (req, res) => {
  const post = await BlogPost.findOneAndDelete({ slug: req.params.slug });
  if (!post) return res.status(404).json({ message: "Blog post not found" });
  res.json({ message: "Blog post deleted" });
});

export default router;


