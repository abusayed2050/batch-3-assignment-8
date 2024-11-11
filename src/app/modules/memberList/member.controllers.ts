import { Request, Response } from "express";
import { MemberServices } from "./member.services";

const createMember = async (req: Request, res: Response) => {
  console.log("controller:", req.body);
  try {
    const result = await MemberServices.createMember(req.body);

    res.status(201).json({
      success: true,
      status: 201,
      message: "Member created successfully",
      data: result.data,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err?.name || "something went wrong",
      error: {
        name: err?.name,
        message: err?.message,
        stack: err?.stack,
      },
    });
  }
};

const ReadAllMembers = async (req: Request, res: Response) => {
  try {
    const result = await MemberServices.ReadAllMembers(req.body);

    res.status(200).json({
      success: true,
      status: 200,
      message: "Members retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err?.name || "something went wrong",
      error: {
        name: err?.name,
        message: err?.message,
        stack: err?.stack,
      },
    });
  }
};

const readMemberbyID = async (req: Request, res: Response) => {
  const { memberId } = req.params;
  try {
    const result = await MemberServices.readMemberbyID(memberId);

    res.status(200).json({
      success: true,
      status: 200,
      message: "Members retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err?.name || "something went wrong",
      error: {
        name: err?.name,
        message: err?.message,
        stack: err?.stack,
      },
    });
  }
};

const updateMember = async (req: Request, res: Response) => {
  const { memberId } = req.params;
  try {
    const result = await MemberServices.updateMember(memberId, req.body);

    res.status(200).json({
      success: true,
      status: 200,
      message: "Member updated successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err?.name || "something went wrong",
      error: {
        name: err?.name,
        message: err?.message,
        stack: err?.stack,
      },
    });
  }
};

const deleteMember = async (req: Request, res: Response) => {
  const { memberId } = req.params;
  try {
    const result = await MemberServices.deleteMember(memberId);

    res.status(200).json({
      success: true,
      status: 200,
      message: "Member successfully deleted",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err?.name || "something went wrong",
      error: {
        name: err?.name,
        message: err?.message,
        stack: err?.stack,
      },
    });
  }
};

export const MemberControllers = {
  createMember,
  ReadAllMembers,
  readMemberbyID,
  updateMember,
  deleteMember,
};
