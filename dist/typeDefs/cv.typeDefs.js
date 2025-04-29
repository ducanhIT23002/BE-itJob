"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CVtypeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.CVtypeDefs = (0, apollo_server_express_1.gql) `
    type CVList {
        id : Int,
        idCompany : Int,
        idJob : Int,
        name: String,
        phone : Int,
        email : String,
        statusRead : String,
        description : String,
        linkProject : String,
        city : String
    }
    input NewCV {
      idCompany : Int,
      name : String,
      phone : Int,
      city : String,
      description : String,
      linkProject : String,
      email : String
      idJob : Int
    }

type Query {
  getlistCV : [CVList]
  getItemCV(id : Int) : CVList
}

type Mutation {
  CreateCV(cv : NewCV) : CVList
  StatusCV(id : Int) : Boolean
  DeleteCV(id : Int) : Boolean
}
`;
