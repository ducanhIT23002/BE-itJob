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
exports.CompanyResolver = void 0;
const company_model_1 = __importDefault(require("../models/company.model"));
exports.CompanyResolver = {
    Query: {
        getlistCompany: () => __awaiter(void 0, void 0, void 0, function* () {
            const cites = yield company_model_1.default.findAll({ raw: true });
            return cites;
        }),
        getItemCompary: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { id } = args;
            const cites = yield company_model_1.default.findOne({
                where: { id: id }
            });
            return cites;
        }),
    },
    Mutation: {
        updateItemCompany: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { cpn } = args;
            const record = yield company_model_1.default.update(cpn, { where: { id: cpn.id } });
            const updated = yield company_model_1.default.findOne({
                where: { id: cpn.id }
            });
            return updated;
        })
    }
};
