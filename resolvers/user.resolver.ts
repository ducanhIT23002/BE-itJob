import { Query } from "mysql2/typings/mysql/lib/protocol/sequences/Query";
import User from "../models/users.model";
export const UserResolver = {
    Query : {
        ListUser: async () => {
            const user = await User.findAll({ raw: true });
            return user;
        }
    }
    ,Mutation: {
        CreateUser: async (_,{user}) => {
            const users = await User.create(user);       
            return users;
        }
    },
}