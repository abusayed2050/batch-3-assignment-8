import express from "express";
import { LMRoutes } from "../modules/BookList/book.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    route: LMRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
