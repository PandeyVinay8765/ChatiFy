import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getSuggestions, summarizeChat } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/suggest", protectRoute, getSuggestions);
router.post("/summarize", protectRoute, summarizeChat);

export default router;