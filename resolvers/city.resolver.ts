import City from "../models/city.model"

export const CityResolver = {
    Query: {
        getlistCity: async () => {
            const cites = await City.findAll({ raw: true });
            return cites;
        }
    },
}