"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const Job_typeDefs_1 = require("./Job.typeDefs");
const city_typeDefs_1 = require("./city.typeDefs");
const cv_typeDefs_1 = require("./cv.typeDefs");
const tags_typeDefs_1 = require("./tags.typeDefs");
const company_typeDefs_1 = require("./company.typeDefs");
const user_typeDefs_1 = require("./user.typeDefs");
exports.typeDefs = [
    Job_typeDefs_1.JobtypeDefs,
    city_typeDefs_1.CitytypeDefs,
    cv_typeDefs_1.CVtypeDefs,
    tags_typeDefs_1.TagtypeDefs,
    company_typeDefs_1.CompanytypeDefs,
    user_typeDefs_1.UserTypeDefs
];
