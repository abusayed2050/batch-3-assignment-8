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

const returnBook = async (data: BorrowBookTypes) => {
  const { borrowId } = data;
  const findBorrowBook = await prisma.borrowRecord.findUnique({
    where: { borrowId },
  });

  if (!findBorrowBook) {
    throw new Error("Borrow book record not found");
  }

  const findBook = await prisma.book.findUnique({
    where: { bookId: findBorrowBook.bookId },
  });

  const result = await prisma.$transaction(async (tsClient) => {
    await tsClient.borrowRecord.update({
      where: { borrowId },
      data: {
        returnDate: new Date(),
      },
    });

    await tsClient.book.update({
      where: { bookId: findBook?.bookId },
      data: {
        availableCopies: { increment: 1 },
      },
    });
  });

  return result;
};

const overDueBook = async (param: BorrowBookTypes) => {
  //find out total due date
  const currentDate = new Date();
  const dueDate = new Date(currentDate);
  dueDate.setDate(dueDate.getDate() - 14);

  const result = await prisma.borrowRecord.findMany({
    where: {
      returnDate: null,
      borrowDate: {
        lt: dueDate, //compare with book borrow date and due date
      },
    },
    include: {
      book: { select: { title: true } },
      Member: { select: { name: true } },
    },
  });

  //calculate total over due Days and return
  const overdueBorrowBookList = result.map((data) => {
    const BorrowBookDays = currentDate.getTime() - data.borrowDate.getTime();
    const dayByBorrowBook = Math.floor(BorrowBookDays / (1000 * 60 * 60 * 24));
    const overdueDays = dayByBorrowBook - 14;

    return {
      borrowId: data.borrowId,
      bookTitle: data.book.title,
      borrowerName: data.Member.name,
      overdueDays,
    };
  });
  return overdueBorrowBookList;
};
export const borrowBookServices = {
  borrowBook,
  returnBook,
  overDueBook,
};
