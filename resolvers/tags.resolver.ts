import Tags from "../models/tags.model"

export const TagResolver = {
    Query: {
        getlistTag: async () => {
            const cites = await Tags.findAll({ raw: true });
            return cites;
        }
    },
}