import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema(
  {
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    studentName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ["pending", "active", "completed", "cancelled"],
      default: "pending",
    },
    paymentStatus: {
      type: String,
      enum: ["unpaid", "paid", "refunded"],
      default: "unpaid",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Enrollment", enrollmentSchema);
