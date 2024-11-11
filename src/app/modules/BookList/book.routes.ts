import express, { Request, Response } from "express";
import { BookControllers } from "./book.controllers";

const router = express.Router();

router.post("/", BookControllers.createBook);
router.get("/", BookControllers.ReadAllBooks);
router.get("/:bookId", BookControllers.ReadAllBooks);

export const LMRoutes = router;
