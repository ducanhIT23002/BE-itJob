import { gql } from "apollo-server-express";

// định nghĩa là các cái key mà người dùng được phép lấy
export const JobtypeDefs = gql`
# dịnh dạng kiểu data sẽ được lấy ra
type Company {
  id :Int,
  companyName : String
}
type JobList {
    id : Int,
    name : String,
    tags : String,
    salary : Int,
    description : String,
    status: Boolean,
    city : String,
    company : Company
}
type JobListAdmin {
    id : Int,
    name : String,
    tags :String,
    salary : Int,
    description : String,
    status: Boolean,
    city : String,
    idCompany : Int,
}
input JobStype {
  idCompany : Int,
  name : String,
  tags : [String],
  salary : Int,
  description : String,
  city : [String],
}
input EditJobStype {
  id : Int
  idCompany : Int,
  name : String,
  tags : [String],
  salary : Int,
  description : String,
  city : [String],
}

# lấy ra 1 danh sách 
type Query {
  getListJob : [JobList]
  getAJob(id : Int) : JobList
}
# thêm, sửa , xóa ,....
type Mutation {
   CreateJob(job : JobStype) : JobListAdmin
   UpdateJob(job : EditJobStype) : JobListAdmin
   DeleteJob(id: Int): Boolean
}
`;

