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
exports.BookControllers = void 0;
const book_services_1 = require("./book.services");
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_services_1.BookServices.createBook(req.body);
        res.status(201).json({
            success: true,
            status: 201,
            message: "Book created successfully",
            data: result.data,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.name) || "something went wrong",
            error: {
                name: err === null || err === void 0 ? void 0 : err.name,
                message: err === null || err === void 0 ? void 0 : err.message,
                stack: err === null || err === void 0 ? void 0 : err.stack,
            },
        });
    }
});
const ReadAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_services_1.BookServices.ReadAllBooks(req.body);
        res.status(200).json({
            success: true,
            status: 200,
            message: "Books retrieved successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.name) || "something went wrong",
            error: {
                name: err === null || err === void 0 ? void 0 : err.name,
                message: err === null || err === void 0 ? void 0 : err.message,
                stack: err === null || err === void 0 ? void 0 : err.stack,
            },
        });
    }
});
const readBookbyID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    try {
        const result = yield book_services_1.BookServices.readBookbyID(bookId);
        res.status(200).json({
            success: true,
            status: 200,
            message: "Books retrieved successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.name) || "something went wrong",
            error: {
                name: err === null || err === void 0 ? void 0 : err.name,
                message: err === null || err === void 0 ? void 0 : err.message,
                stack: err === null || err === void 0 ? void 0 : err.stack,
            },
        });
    }
});
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    try {
        const result = yield book_services_1.BookServices.updateBook(bookId, req.body);
        res.status(200).json({
            success: true,
            status: 200,
            message: "Book updated successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.name) || "something went wrong",
            error: {
                name: err === null || err === void 0 ? void 0 : err.name,
                message: err === null || err === void 0 ? void 0 : err.message,
                stack: err === null || err === void 0 ? void 0 : err.stack,
            },
        });
    }
});
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    try {
        const result = yield book_services_1.BookServices.deleteBook(bookId);
        res.status(200).json({
            success: true,
            status: 200,
            message: "Book successfully deleted",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.name) || "something went wrong",
            error: {
                name: err === null || err === void 0 ? void 0 : err.name,
                message: err === null || err === void 0 ? void 0 : err.message,
                stack: err === null || err === void 0 ? void 0 : err.stack,
            },
        });
    }
});
exports.BookControllers = {
    createBook,
    ReadAllBooks,
    readBookbyID,
    updateBook,
    deleteBook,
};
