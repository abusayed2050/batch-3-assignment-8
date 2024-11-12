"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LMBorrowRoutes = void 0;
const express_1 = __importDefault(require("express"));
const borrow_controllers_1 = require("./borrow.controllers");
const router = express_1.default.Router();
router.post("/", borrow_controllers_1.borrowBookControllers.borrowBook);
router.get("/overdue", borrow_controllers_1.borrowBookControllers.overDueBook);
router.put("/", borrow_controllers_1.borrowBookControllers.returnBook);
exports.LMBorrowRoutes = router;
