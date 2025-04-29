import { gql } from "apollo-server-express";

// định nghĩa là các cái key mà người dùng được phép lấy
export const CompanytypeDefs = gql`
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
