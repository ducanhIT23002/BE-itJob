"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanytypeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.CompanytypeDefs = (0, apollo_server_express_1.gql) `
    type CompanyList {
        id : Int,
        companyName : String,
        phone : Int,
        email: String,
        quantityPeople : Int,
        description : String,
        detail : String,
        address : String,
        workingTime : String,
        website : String
    }

input updateCompany{
  id : Int,
  address : String,
  email: String,
  description : String,
  detail : String,
  companyName : String,
  phone : Int,
  quantityPeople : Int,
  website : String
  workingTime : String,
}

type Query {
  getlistCompany : [CompanyList]
  getItemCompary(id : Int) : CompanyList
}
type Mutation {
  updateItemCompany(cpn : updateCompany) : CompanyList
}
`;
