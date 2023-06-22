import express from "express";
import { Hello } from "../controllers/Hello.js";

const router = express.Router();

router.get("/", Hello);

export default router;
