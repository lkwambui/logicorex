import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    provider: { type: String, default: "stripe" },
    amount: { type: Number, required: true },
    currency: { type: String, default: "usd" },
    status: { type: String, default: "pending" },
    sessionId: { type: String, trim: true },
    customerEmail: { type: String, trim: true },
    metadata: { type: Object },
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
