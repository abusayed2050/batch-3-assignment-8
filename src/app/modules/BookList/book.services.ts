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
    data: result,
  };
};

export const BookServices = {
  createBook,
};
