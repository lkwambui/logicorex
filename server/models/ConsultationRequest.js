import mongoose from "mongoose";

const consultationRequestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    company: { type: String, trim: true },
    service: { type: String, trim: true },
    budget: { type: String, trim: true },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ["new", "contacted", "in-progress", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

export default mongoose.model("ConsultationRequest", consultationRequestSchema);
