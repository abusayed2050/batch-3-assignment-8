import { PrismaClient } from "@prisma/client";
import { BorrowBookTypes } from "./borrow.interface";

const prisma = new PrismaClient();

const borrowBook = async (data: BorrowBookTypes) => {
  const { bookId, memberId } = data;

  const findBook = await prisma.book.findUnique({
    where: { bookId },
  });

  if (!findBook) {
    throw new Error("Book not found");
  }
  const result = await prisma.$transaction(async (tsClient) => {
    const createBorrowRecord = await tsClient.borrowRecord.create({
      data: {
        bookId,
        memberId,
      },
    });

    const updateavailableCopies = await tsClient.book.update({
      where: { bookId },
      data: {
        availableCopies: { decrement: 1 },
      },
    });
    return { createBorrowRecord, updateavailableCopies };
  });

  return {
    data: {
      borrowId: result.createBorrowRecord.borrowId,
      bookId: result.createBorrowRecord.bookId,
      memberId: result.createBorrowRecord.memberId,
      borrowDate: result.createBorrowRecord.borrowDate,
    },
  };
};

export const borrowBookServices = {
  borrowBook,
};
