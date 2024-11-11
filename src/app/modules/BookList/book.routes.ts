import express, { Request, Response } from "express";
import { BookControllers } from "./book.controllers";

const router = express.Router();

router.post("/", BookControllers.createBook);
router.get("/", BookControllers.ReadAllBooks);
router.get("/:bookId", BookControllers.readBookbyID);
router.put("/:bookId", BookControllers.updateBook);
router.delete("/:bookId", BookControllers.deleteBook);

export const LMRoutes = router;
