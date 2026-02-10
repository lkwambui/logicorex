import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true },
    category: { 
      type: String, 
      enum: ["web-design", "uiux", "frontend", "react", "graphics", "full-stack"],
      required: true 
    },
    price: { type: Number, default: 0 },
    duration: { type: String, trim: true },
    level: { type: String, trim: true },
    thumbnail: { type: String, trim: true },
    published: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
