import express, { Request, Response } from "express";
import { borrowBookControllers } from "./borrow.controllers";

const router = express.Router();

router.post("/", borrowBookControllers.borrowBook);
router.put("/", borrowBookControllers.returnBook);

export const LMBorrowRoutes = router;
