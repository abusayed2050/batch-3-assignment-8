"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookServices = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createBook = (param) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.create({
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
});
const ReadAllBooks = (param) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.findMany({
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
});
const readBookbyID = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.book.findUniqueOrThrow({
        where: {
            bookId,
        },
    });
    const result = yield prisma.book.findUnique({
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
});
const updateBook = (bookId, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.book.findUniqueOrThrow({
        where: {
            bookId,
        },
    });
    const result = yield prisma.book.update({
        where: {
            bookId,
        },
        data,
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
});
const deleteBook = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.book.findUniqueOrThrow({
        where: {
            bookId,
        },
    });
    const result = yield prisma.book.delete({
        where: {
            bookId,
        },
    });
});
exports.BookServices = {
    createBook,
    ReadAllBooks,
    readBookbyID,
    updateBook,
    deleteBook,
};
