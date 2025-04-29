import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database";
import { ApolloServer } from "apollo-server-express";

import { typeDefs } from "./typeDefs/index.typeDefs";
import { resolver } from "./resolvers/index.resolver";

const startServer = async () => {
  dotenv.config();

  // Kết nối DB
  try {
    await sequelize.authenticate();
    console.log("ket noi database thanh cong");
  } catch (err) {
    console.log("database bi loi");

  }

  const app: Express = express();
  const port = process.env.PORT || 3000;

  app.use(cors({ origin: "*" }));   
  app.use(express.json());

  // Khởi tạo ApolloServer
  const apolloServer = new ApolloServer({
    typeDefs :typeDefs,
    resolvers: resolver,
  });
  await apolloServer.start();

  // Gắn GraphQL middleware
  apolloServer.applyMiddleware({
    app,
    path: "/graphql",
  });

  // Start server
  app.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port}${apolloServer.graphqlPath}`);
  });
};

startServer();




// // Rest API
// app.get("/articles", (req: Request, res: Response) => {
//   res.json({
//     articles: []
//   });
// });