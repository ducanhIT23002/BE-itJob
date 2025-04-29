import { gql } from "apollo-server-express";

// định nghĩa là các cái key mà người dùng được phép lấy
export const UserTypeDefs = gql`

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