import { PrismaClient } from "@prisma/client";
import { BookTypes } from "./book.interface";

const prisma = new PrismaClient();

const createBook = async (param: BookTypes) => {
  const result = await prisma.book.create({
    data: {
      title: param.title,
      genre: param.genre,
      publishedYear: param.publishedYear,
      totalCopies: param.totalCopies,
      availableCopies: param.availableCopies,
    },
  });

  return {
    data: {
      bookId: result.bookId,
      title: result.title,
      genre: result.genre,
      publishedYear: result.publishedYear,
      totalCopies: result.totalCopies,
      availableCopies: result.availableCopies,
    },
  };
};

const ReadAllBooks = async (param: BookTypes) => {
  const result = await prisma.book.findMany({
    select: {
      bookId: true,
      title: true,
      genre: true,
      publishedYear: true,
      totalCopies: true,
      availableCopies: true,
    },
  });
  return result;
};

const readBookbyID = async (bookId: string) => {
  const result = await prisma.book.findUnique({
    where: {
      bookId,
    },
    select: {
      bookId: true,
      title: true,
      genre: true,
      publishedYear: true,
      totalCopies: true,
      availableCopies: true,
    },
  });
  return result;
};

export const BookServices = {
  createBook,
  ReadAllBooks,
  readBookbyID,
};
