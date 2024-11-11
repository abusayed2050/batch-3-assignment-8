import { Request, Response } from "express";
import { BookServices } from "./book.services";

const createBook = async (req: Request, res: Response) => {
  console.log("controller:", req.body);
  try {
    const result = await BookServices.createBook(req.body);

    res.status(201).json({
      success: true,
      status: 201,
      message: "Book created successfully",
      data: result.data,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err?.name || "something went wrong",
      error: {
        name: err?.name,
        message: err?.message,
        stack: err?.stack,
      },
    });
  }
};

const ReadAllBooks = async (req: Request, res: Response) => {
  try {
    const result = await BookServices.ReadAllBooks(req.body);

    res.status(200).json({
      success: true,
      status: 200,
      message: "Books retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err?.name || "something went wrong",
      error: {
        name: err?.name,
        message: err?.message,
        stack: err?.stack,
      },
    });
  }
};

const readBoobyID = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  try {
    const result = await BookServices.readBoobyID(bookId);

    res.status(200).json({
      success: true,
      status: 200,
      message: "Books retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err?.name || "something went wrong",
      error: {
        name: err?.name,
        message: err?.message,
        stack: err?.stack,
      },
    });
  }
};

export const BookControllers = {
  createBook,
  ReadAllBooks,
  readBoobyID,
};
