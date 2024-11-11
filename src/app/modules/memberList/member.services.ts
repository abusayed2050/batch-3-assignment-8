import { PrismaClient } from "@prisma/client";
import { MemberTypes } from "./member.interface";

const prisma = new PrismaClient();

const createMember = async (param: MemberTypes) => {
  const result = await prisma.member.create({
    data: {
      name: param.name,
      email: param.email,
      phone: param.phone,
      membershipDate: param.membershipDate,
    },
  });

  return {
    data: {
      memberId: result.memberId,
      name: result.name,
      email: result.email,
      phone: result.phone,
      membershipDate: result.membershipDate,
    },
  };
};

const ReadAllMembers = async (param: MemberTypes) => {
  const result = await prisma.member.findMany({
    select: {
      memberId: true,
      name: true,
      email: true,
      phone: true,
      membershipDate: true,
    },
  });
  return result;
};

const readMemberbyID = async (memberId: string) => {
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });
  const result = await prisma.member.findUnique({
    where: {
      memberId,
    },
    select: {
      memberId: true,
      name: true,
      email: true,
      phone: true,
      membershipDate: true,
    },
  });
  return result;
};

const updateMember = async (memberId: string, data: MemberTypes) => {
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });
  const result = await prisma.member.update({
    where: {
      memberId,
    },
    data,
  });
  return {
    data: {
      memberId: result.memberId,
      name: result.name,
      email: result.email,
      phone: result.phone,
    },
  };
};

const deleteMember = async (memberId: string) => {
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });
  const result = await prisma.member.delete({
    where: {
      memberId,
    },
  });
};
export const MemberServices = {
  createMember,
  ReadAllMembers,
  readMemberbyID,
  updateMember,
  deleteMember,
};
