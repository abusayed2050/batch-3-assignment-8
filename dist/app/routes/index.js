"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_routes_1 = require("../modules/BookList/book.routes");
const member_routes_1 = require("../modules/memberList/member.routes");
const borrow_routes_1 = require("../modules/BorrowBook/borrow.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/books",
        route: book_routes_1.LMRoutes,
    },
    {
        path: "/members",
        route: member_routes_1.LMMmemberRoutes,
    },
    {
        path: "/borrow",
        route: borrow_routes_1.LMBorrowRoutes,
    },
    {
        path: "/return",
        route: borrow_routes_1.LMBorrowRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
