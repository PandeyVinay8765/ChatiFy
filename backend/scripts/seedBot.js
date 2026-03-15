import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import User from "../models/user.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../.env") });

await mongoose.connect(process.env.MONGO_DB_URI);

const existing = await User.findOne({ username: "ai-assistant" });
if (existing) {
	console.log("Bot already exists:", existing._id);
	process.exit(0);
}

const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash("bot-secret-pass", salt);

const bot = await User.create({
	fullName: "AI Assistant",
	username: "ai-assistant",
	password: hashedPassword,
	gender: "male",
	profilePic: "https://api.dicebear.com/7.x/bottts/png?seed=ai-bot",
});

console.log("Bot created! ID:", bot._id);
process.exit(0);