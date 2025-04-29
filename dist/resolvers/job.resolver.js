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
exports.Jobresolvers = void 0;
const jobs_model_1 = __importDefault(require("../models/jobs.model"));
const company_model_1 = __importDefault(require("../models/company.model"));
exports.Jobresolvers = {
    Query: {
        getListJob: () => __awaiter(void 0, void 0, void 0, function* () {
            const jobs = yield jobs_model_1.default.findAll({
                where: { status: true }
            });
            return jobs;
        }),
        getAJob: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { id } = args;
            const job = yield jobs_model_1.default.findOne({
                where: { id, status: true }
            });
            return job;
        }),
    },
    Mutation: {
        CreateJob: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { job } = args;
            const record = yield jobs_model_1.default.create(job);
            return record;
        }),
        UpdateJob: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { job } = args;
            const record = yield jobs_model_1.default.update(job, { where: { id: job.id } });
            const updated = yield jobs_model_1.default.findOne({
                where: { id: job.id }
            });
            return updated;
        }),
        DeleteJob: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
            const deletedCount = yield jobs_model_1.default.destroy({ where: { id } });
            return deletedCount > 0;
        })
    },
    JobList: {
        company: (job) => __awaiter(void 0, void 0, void 0, function* () {
            const companyID = job.idCompany;
            const company = yield company_model_1.default.findOne({
                where: { id: companyID }
            });
            return company;
        })
    }
};
