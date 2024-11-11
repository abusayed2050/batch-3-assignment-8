import express, { Request, Response } from "express";
import { BookControllers } from "./book.controllers";

const router = express.Router();

router.get("/", BookControllers.createBook);
router.post("/", BookControllers.createBook);

export const LMRoutes = router;
