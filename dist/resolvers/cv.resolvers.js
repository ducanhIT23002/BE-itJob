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
exports.CVResolver = void 0;
const cv_model_1 = __importDefault(require("../models/cv.model"));
exports.CVResolver = {
    Query: {
        getlistCV: () => __awaiter(void 0, void 0, void 0, function* () {
            const cites = yield cv_model_1.default.findAll({ raw: true });
            console.log(cites);
            return cites;
        }),
        getItemCV: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { id } = args;
            const cites = yield cv_model_1.default.findOne({
                where: { id: id }
            });
            return cites;
        })
    },
    Mutation: {
        CreateCV: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { cv }) {
            const newCV = yield cv_model_1.default.create(cv);
            return newCV;
        }),
        StatusCV: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
            const updatedCV = yield cv_model_1.default.update({ statusRead: true }, { where: { id } });
            const Status = yield cv_model_1.default.findOne({
                where: { id: id }
            });
            return true;
        }),
        DeleteCV: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
            const deletedCV = yield cv_model_1.default.destroy({ where: { id } });
            return deletedCV > 0;
        })
    }
};
