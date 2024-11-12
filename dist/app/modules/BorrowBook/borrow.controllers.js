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
exports.borrowBookControllers = void 0;
const borrow_services_1 = require("./borrow.services");
const borrowBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield borrow_services_1.borrowBookServices.borrowBook(req.body);
        res.status(200).json({
            success: true,
            status: 200,
            message: "Book borrowed successfully",
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
const returnBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield borrow_services_1.borrowBookServices.returnBook(req.body);
        res.status(200).json({
            success: true,
            status: 200,
            message: "Book returned successfully",
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
const overDueBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield borrow_services_1.borrowBookServices.overDueBook(req.body);
        //compared over due days length and zero
        if (result.length > 0) {
            res.status(200).json({
                success: true,
                status: 200,
                message: "Overdue borrow list fetched",
                data: result,
            });
        }
        else {
            res.status(200).json({
                success: true,
                status: 200,
                message: "No overdue books",
                data: [],
            });
        }
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
exports.borrowBookControllers = {
    borrowBook,
    returnBook,
    overDueBook,
};
