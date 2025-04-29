import { table, timeStamp } from "console";

import { DataTypes } from 'sequelize';
import sequelize from '../config/database'; // Đảm bảo đường dẫn đúng với cấu hình Sequelize của bạn

const Job = sequelize.define("Job", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      idCompany: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tags: {
        type: DataTypes.JSONB,  // Sử dụng JSONB để lưu mảng JSON
        allowNull: false
      },
      salary: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      createAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      updateAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      city: {
        type: DataTypes.JSONB,  // Sử dụng JSONB để lưu mảng JSON
        allowNull: false
      }
}, {
    tableName : "jobs",
    timestamps: true,         // Bật tính năng auto-createdAt/updatedAt
    createdAt: "createAt",    // Map tên cột createdAt → createAt
    updatedAt: "updateAt" ,    // Map tên cột updatedAt → updateAt
});


export default Job
