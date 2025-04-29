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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const users_model_1 = __importDefault(require("../models/users.model"));
exports.UserResolver = {
    Query: {
        ListUser: () => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield users_model_1.default.findAll({ raw: true });
            return user;
        })
    },
    Mutation: {
        CreateUser: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { user }) {
            const users = yield users_model_1.default.create(user);
            return users;
        })
    },
};
