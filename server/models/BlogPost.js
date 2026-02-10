import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    excerpt: { type: String, trim: true },
    content: { type: String, required: true },
    coverImage: { type: String, trim: true },
    tags: [{ type: String, trim: true }],
    author: { type: String, trim: true },
    published: { type: Boolean, default: false },
    publishedAt: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model("BlogPost", blogPostSchema);
