import express from "express";
import ConsultationRequest from "../models/ConsultationRequest.js";
import { requireAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", requireAdmin, async (req, res) => {
  const requests = await ConsultationRequest.find().sort({ createdAt: -1 });
  res.json(requests);
});

router.post("/", async (req, res) => {
  const request = await ConsultationRequest.create(req.body);
  res.status(201).json(request);
});

router.put("/:id", requireAdmin, async (req, res) => {
  const request = await ConsultationRequest.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!request) return res.status(404).json({ message: "Consultation request not found" });
  res.json(request);
});

export default router;
