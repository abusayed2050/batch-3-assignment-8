"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberServices = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createMember = (param) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.member.create({
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
});
const ReadAllMembers = (param) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.member.findMany({
        select: {
            memberId: true,
            name: true,
            email: true,
            phone: true,
            membershipDate: true,
        },
    });
    return result;
});
const readMemberbyID = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.member.findUniqueOrThrow({
        where: {
            memberId,
        },
    });
    const result = yield prisma.member.findUnique({
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
});
const updateMember = (memberId, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.member.findUniqueOrThrow({
        where: {
            memberId,
        },
    });
    const result = yield prisma.member.update({
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
});
const deleteMember = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.member.findUniqueOrThrow({
        where: {
            memberId,
        },
    });
    const result = yield prisma.member.delete({
        where: {
            memberId,
        },
    });
});
exports.MemberServices = {
    createMember,
    ReadAllMembers,
    readMemberbyID,
    updateMember,
    deleteMember,
};
