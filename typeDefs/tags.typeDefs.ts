import { gql } from "apollo-server-express";

// định nghĩa là các cái key mà người dùng được phép lấy
export const TagtypeDefs = gql`
    type TagList {
        id : Int,
        name: String
    }

type Query {
  getlistTag : [TagList]
}
`;