import express from "express";
import { LMRoutes } from "../modules/BookList/book.routes";
import { LMMmemberRoutes } from "../modules/memberList/member.routes";
import { LMBorrowRoutes } from "../modules/BorrowBook/borrow.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    route: LMRoutes,
  },
  {
    path: "/members",
    route: LMMmemberRoutes,
  },
  {
    path: "/borrow",
    route: LMBorrowRoutes,
  },
  {
    path: "/return",
    route: LMBorrowRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
