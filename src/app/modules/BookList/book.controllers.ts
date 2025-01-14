import { Request, Response } from "express";
import { BookServices } from "./book.services";

const createBook = async (req: Request, res: Response) => {
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

const readBookbyID = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  try {
    const result = await BookServices.readBookbyID(bookId);

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

const updateBook = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  try {
    const result = await BookServices.updateBook(bookId, req.body);

    res.status(200).json({
      success: true,
      status: 200,
      message: "Book updated successfully",
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

const deleteBook = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  try {
    const result = await BookServices.deleteBook(bookId);

    res.status(200).json({
      success: true,
      status: 200,
      message: "Book successfully deleted",
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
  readBookbyID,
  updateBook,
  deleteBook,
};
