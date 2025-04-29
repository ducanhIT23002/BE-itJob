"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolver = void 0;
const job_resolver_1 = require("./job.resolver");
const city_resolver_1 = require("./city.resolver");
const cv_resolvers_1 = require("./cv.resolvers");
const company_resolver_1 = require("./company.resolver");
const tags_resolver_1 = require("./tags.resolver");
const user_resolver_1 = require("./user.resolver");
exports.resolver = [
    job_resolver_1.Jobresolvers,
    city_resolver_1.CityResolver,
    cv_resolvers_1.CVResolver,
    company_resolver_1.CompanyResolver,
    tags_resolver_1.TagResolver,
    user_resolver_1.UserResolver
];
