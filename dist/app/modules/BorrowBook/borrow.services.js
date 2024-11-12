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
exports.borrowBookServices = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const borrowBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId, memberId } = data;
    const findBook = yield prisma.book.findUnique({
        where: { bookId },
    });
    if (!findBook) {
        throw new Error("Book not found");
    }
    const result = yield prisma.$transaction((tsClient) => __awaiter(void 0, void 0, void 0, function* () {
        const createBorrowRecord = yield tsClient.borrowRecord.create({
            data: {
                bookId,
                memberId,
            },
        });
        const updateavailableCopies = yield tsClient.book.update({
            where: { bookId },
            data: {
                availableCopies: { decrement: 1 },
            },
        });
        return { createBorrowRecord, updateavailableCopies };
    }));
    return {
        data: {
            borrowId: result.createBorrowRecord.borrowId,
            bookId: result.createBorrowRecord.bookId,
            memberId: result.createBorrowRecord.memberId,
            borrowDate: result.createBorrowRecord.borrowDate,
        },
    };
});
const returnBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { borrowId } = data;
    const findBorrowBook = yield prisma.borrowRecord.findUnique({
        where: { borrowId },
    });
    if (!findBorrowBook) {
        throw new Error("Borrow book record not found");
    }
    const findBook = yield prisma.book.findUnique({
        where: { bookId: findBorrowBook.bookId },
    });
    const result = yield prisma.$transaction((tsClient) => __awaiter(void 0, void 0, void 0, function* () {
        yield tsClient.borrowRecord.update({
            where: { borrowId },
            data: {
                returnDate: new Date(),
            },
        });
        yield tsClient.book.update({
            where: { bookId: findBook === null || findBook === void 0 ? void 0 : findBook.bookId },
            data: {
                availableCopies: { increment: 1 },
            },
        });
    }));
    return result;
});
const overDueBook = (param) => __awaiter(void 0, void 0, void 0, function* () {
    //find out total due date
    const currentDate = new Date();
    const dueDate = new Date(currentDate);
    dueDate.setDate(dueDate.getDate() - 14);
    const result = yield prisma.borrowRecord.findMany({
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
});
exports.borrowBookServices = {
    borrowBook,
    returnBook,
    overDueBook,
};
