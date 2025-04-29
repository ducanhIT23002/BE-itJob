"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitytypeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.CitytypeDefs = (0, apollo_server_express_1.gql) `
    type CityList {
        id : Int,
        name : String
    }

type Query {
  getlistCity : [CityList]
}

`;
