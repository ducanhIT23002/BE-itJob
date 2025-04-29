import sequelize from '../config/database';
import { DataTypes } from 'sequelize';

const CV = sequelize.define("CV", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    idCompany: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idJob: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    statusRead: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    linkProject: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    createAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true,
    }
},{
    tableName : "cv",
    timestamps: true,         // Bật tính năng auto-createdAt/updatedAt
    createdAt: "createAt",  // Map tên cột createdAt → createAt
    updatedAt : false
});

export default CV;
