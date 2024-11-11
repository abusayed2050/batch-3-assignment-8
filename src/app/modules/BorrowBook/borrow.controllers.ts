import { Request, Response } from "express";
import { borrowBookServices } from "./borrow.services";

const borrowBook = async (req: Request, res: Response) => {
  try {
    const result = await borrowBookServices.borrowBook(req.body);

    res.status(200).json({
      success: true,
      status: 200,
      message: "Book borrowed successfully",
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

const returnBook = async (req: Request, res: Response) => {
  try {
    const result = await borrowBookServices.returnBook(req.body);

    res.status(200).json({
      success: true,
      status: 200,
      message: "Book returned successfully",
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
export const borrowBookControllers = {
  borrowBook,
  returnBook,
};
