import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Library Management System Server is now running.....",
  });
});

export default app;
