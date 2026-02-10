import express from "express";
import Payment from "../models/Payment.js";
import { requireAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/methods", (req, res) => {
  res.json({
    methods: ["mpesa", "bank-transfer"],
    bank: {
      name: process.env.BANK_NAME || "Your Bank",
      accountName: process.env.BANK_ACCOUNT_NAME || "LogicoreX Ltd",
      accountNumber: process.env.BANK_ACCOUNT_NUMBER || "0000000000",
      swiftCode: process.env.BANK_SWIFT_CODE || "",
      branch: process.env.BANK_BRANCH || "",
    },
  });
});

router.post("/mpesa/stk-push", async (req, res) => {
  const { amount, phone, reference, customerEmail, metadata } = req.body;

  if (!amount || !phone) {
    return res.status(400).json({ message: "Amount and phone are required" });
  }

  const payment = await Payment.create({
    provider: "mpesa",
    amount: Number(amount),
    currency: "kes",
    status: "pending",
    customerEmail,
    metadata: { phone, reference, ...metadata },
  });

  res.status(201).json({
    paymentId: payment.id,
    status: payment.status,
    message: "M-Pesa request created. Complete payment on your phone.",
  });
});

router.post("/bank-transfer", async (req, res) => {
  const { amount, reference, customerEmail, metadata } = req.body;
  if (!amount) {
    return res.status(400).json({ message: "Amount is required" });
  }

  const payment = await Payment.create({
    provider: "bank-transfer",
    amount: Number(amount),
    currency: "kes",
    status: "pending",
    customerEmail,
    metadata: { reference, ...metadata },
  });

  res.status(201).json({
    paymentId: payment.id,
    status: payment.status,
    instructions: {
      bankName: process.env.BANK_NAME || "Your Bank",
      accountName: process.env.BANK_ACCOUNT_NAME || "LogicoreX Ltd",
      accountNumber: process.env.BANK_ACCOUNT_NUMBER || "0000000000",
      swiftCode: process.env.BANK_SWIFT_CODE || "",
      branch: process.env.BANK_BRANCH || "",
      reference: reference || payment.id,
    },
  });
});

router.get("/", requireAdmin, async (req, res) => {
  const payments = await Payment.find().sort({ createdAt: -1 });
  res.json(payments);
});

export default router;
