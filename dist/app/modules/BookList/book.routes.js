"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LMRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controllers_1 = require("./book.controllers");
const router = express_1.default.Router();
router.post("/", book_controllers_1.BookControllers.createBook);
router.get("/", book_controllers_1.BookControllers.ReadAllBooks);
router.get("/:bookId", book_controllers_1.BookControllers.readBookbyID);
router.put("/:bookId", book_controllers_1.BookControllers.updateBook);
router.delete("/:bookId", book_controllers_1.BookControllers.deleteBook);
exports.LMRoutes = router;
