import express, { Request, Response } from "express";
import { MemberControllers } from "./member.controllers";

const router = express.Router();

router.post("/", MemberControllers.createMember);
router.get("/", MemberControllers.ReadAllMembers);
router.get("/:memberId", MemberControllers.readMemberbyID);
router.put("/:memberId", MemberControllers.updateMember);
router.delete("/:memberId", MemberControllers.deleteMember);

export const LMMmemberRoutes = router;
