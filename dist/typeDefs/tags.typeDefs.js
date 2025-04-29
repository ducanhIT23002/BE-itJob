"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagtypeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.TagtypeDefs = (0, apollo_server_express_1.gql) `
    type TagList {
        id : Int,
        name: String
    }

type Query {
  getlistTag : [TagList]
}
`;
