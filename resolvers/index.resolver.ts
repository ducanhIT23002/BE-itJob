import { Jobresolvers } from "./job.resolver"
import {CityResolver} from "./city.resolver"
import { CVResolver } from "./cv.resolvers"
import { CompanyResolver } from "./company.resolver"
import { TagResolver } from "./tags.resolver"
import { UserResolver } from "./user.resolver"
export const resolver = [
    Jobresolvers,
    CityResolver,
    CVResolver,
    CompanyResolver,
    TagResolver,
    UserResolver
]

