import express from "express";
import { LMRoutes } from "../modules/BookList/book.routes";
import { LMMmemberRoutes } from "../modules/memberList/member.routes";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
