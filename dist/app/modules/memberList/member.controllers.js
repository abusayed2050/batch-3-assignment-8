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
exports.MemberControllers = void 0;
const member_services_1 = require("./member.services");
const createMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield member_services_1.MemberServices.createMember(req.body);
        res.status(201).json({
            success: true,
            status: 201,
            message: "Member created successfully",
            data: result.data,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.name) || "something went wrong",
            error: {
                name: err === null || err === void 0 ? void 0 : err.name,
                message: err === null || err === void 0 ? void 0 : err.message,
                stack: err === null || err === void 0 ? void 0 : err.stack,
            },
        });
    }
});
const ReadAllMembers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield member_services_1.MemberServices.ReadAllMembers(req.body);
        res.status(200).json({
            success: true,
            status: 200,
            message: "Members retrieved successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.name) || "something went wrong",
            error: {
                name: err === null || err === void 0 ? void 0 : err.name,
                message: err === null || err === void 0 ? void 0 : err.message,
                stack: err === null || err === void 0 ? void 0 : err.stack,
            },
        });
    }
});
const readMemberbyID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    try {
        const result = yield member_services_1.MemberServices.readMemberbyID(memberId);
        res.status(200).json({
            success: true,
            status: 200,
            message: "Members retrieved successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.name) || "something went wrong",
            error: {
                name: err === null || err === void 0 ? void 0 : err.name,
                message: err === null || err === void 0 ? void 0 : err.message,
                stack: err === null || err === void 0 ? void 0 : err.stack,
            },
        });
    }
});
const updateMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    try {
        const result = yield member_services_1.MemberServices.updateMember(memberId, req.body);
        res.status(200).json({
            success: true,
            status: 200,
            message: "Member updated successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.name) || "something went wrong",
            error: {
                name: err === null || err === void 0 ? void 0 : err.name,
                message: err === null || err === void 0 ? void 0 : err.message,
                stack: err === null || err === void 0 ? void 0 : err.stack,
            },
        });
    }
});
const deleteMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    try {
        const result = yield member_services_1.MemberServices.deleteMember(memberId);
        res.status(200).json({
            success: true,
            status: 200,
            message: "Member successfully deleted",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.name) || "something went wrong",
            error: {
                name: err === null || err === void 0 ? void 0 : err.name,
                message: err === null || err === void 0 ? void 0 : err.message,
                stack: err === null || err === void 0 ? void 0 : err.stack,
            },
        });
    }
});
exports.MemberControllers = {
    createMember,
    ReadAllMembers,
    readMemberbyID,
    updateMember,
    deleteMember,
};
