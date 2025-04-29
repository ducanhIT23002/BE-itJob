import { where } from "sequelize";
import CV from "../models/cv.model"

export const CVResolver = {
    Query: {
        getlistCV: async () => {
            const cites = await CV.findAll({ raw: true });
            console.log(cites)
            return cites;
        },
        getItemCV: async (_, args) => {
            const { id } = args
            const cites = await CV.findOne({
                where: { id: id }
            });
            return cites;
        }
    },
    Mutation: {
        CreateCV: async (_, { cv }) => {
            const newCV = await CV.create(cv)
            return newCV
        },
        StatusCV: async (_, { id }) => {
            const updatedCV = await CV.update(
                { statusRead: true },
                { where: { id } }
            );
            const Status = await CV.findOne({
                where: { id: id }
            });
            return true;
        },
        DeleteCV: async (_, { id }) => {
            const deletedCV = await CV.destroy({ where: { id } });
            return deletedCV > 0;

        }
    }
}