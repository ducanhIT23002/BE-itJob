"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTypeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.UserTypeDefs = (0, apollo_server_express_1.gql) `

input register {
    CompanyId : Int
    name : String,
    email : String,
    password : String,
    token : String,
    phone : Int
}

type User {
  id: Int
  CompanyId: Int
  name: String
  token: String
  admin: Boolean
  email: String
  password: String
  phone : Int
}
type Query {
  ListUser : [User]
}
type Mutation {
    CreateUser(user : register) : User
}
`;
