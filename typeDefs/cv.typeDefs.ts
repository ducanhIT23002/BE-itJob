import { gql } from "apollo-server-express";

// định nghĩa là các cái key mà người dùng được phép lấy
export const CVtypeDefs = gql`
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
