import Company from "../models/company.model"

export const CompanyResolver = {
    Query: {
        getlistCompany: async () => {
            const cites = await Company.findAll({ raw: true });
            return cites;
        },
        getItemCompary: async (_, args) => {
            const { id } = args
            const cites = await Company.findOne({
                where: { id: id }
            });
            return cites;
        },
    },
    Mutation: {
        updateItemCompany: async (_, args) => {
            const { cpn } = args
            const record = await Company.update(
                cpn,
                { where: { id: cpn.id } }
            )
            const updated = await Company.findOne({
                where: { id: cpn.id }
            });
            return updated;
        }
    }
}