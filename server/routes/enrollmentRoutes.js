import express from "express";
import Enrollment from "../models/Enrollment.js";
import { requireAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", requireAdmin, async (req, res) => {
  const enrollments = await Enrollment.find().populate("course").sort({ createdAt: -1 });
  res.json(enrollments);
});

router.post("/", async (req, res) => {
  const enrollment = await Enrollment.create(req.body);
  res.status(201).json(enrollment);
});

router.put("/:id", requireAdmin, async (req, res) => {
  const enrollment = await Enrollment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!enrollment) return res.status(404).json({ message: "Enrollment not found" });
  res.json(enrollment);
});

export default router;
