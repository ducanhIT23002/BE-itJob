import { gql } from "apollo-server-express";

// định nghĩa là các cái key mà người dùng được phép lấy
export const CitytypeDefs = gql`
    type CityList {
        id : Int,
        name : String
    }

type Query {
  getlistCity : [CityList]
}

`;
