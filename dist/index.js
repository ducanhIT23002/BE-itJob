"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./config/database"));
const apollo_server_express_1 = require("apollo-server-express");
const index_typeDefs_1 = require("./typeDefs/index.typeDefs");
const index_resolver_1 = require("./resolvers/index.resolver");
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    dotenv_1.default.config();
    try {
        yield database_1.default.authenticate();
        console.log("ket noi database thanh cong");
    }
    catch (err) {
        console.log("database bi loi");
    }
    const app = (0, express_1.default)();
    const port = process.env.PORT || 3000;
    app.use((0, cors_1.default)({ origin: "*" }));
    app.use(express_1.default.json());
    const apolloServer = new apollo_server_express_1.ApolloServer({
        typeDefs: index_typeDefs_1.typeDefs,
        resolvers: index_resolver_1.resolver,
    });
    yield apolloServer.start();
    apolloServer.applyMiddleware({
        app,
        path: "/graphql",
    });
    app.listen(port, () => {
        console.log(`🚀 Server ready at http://localhost:${port}${apolloServer.graphqlPath}`);
    });
});
startServer();
