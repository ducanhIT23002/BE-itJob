// import mongoose from "mongoose";

// export const connect = async (): Promise<void> => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log("Connect Success!");
//   } catch (error) {
//     console.log("Connect Error!");
//   }
// };


import { Sequelize } from "sequelize";

import dotenv from "dotenv"; // cho sql
dotenv.config()

const sequelize = new Sequelize(
  process.env.DATABASE_NAME, // Tên database
  process.env.DATABASE_USERNAME, // Username đăng nhập
  process.env.DATABASE_PASSWORD, // Mật khẩu
  {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),    // ← thêm port
    dialect: "mysql",
    logging: false,  // tắt log SQL, tuỳ chọn
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connect Success!");
  })
  .catch((error) => {
    console.error("Connect Error: ", error);
  });

export default sequelize;