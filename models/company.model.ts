import sequelize from '../config/database'; // Đảm bảo đường dẫn đúng với cấu hình Sequelize của bạn
import { DataTypes } from 'sequelize';

const Company = sequelize.define("Company",{
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey: true,
        autoIncrement: true,
    },
    companyName : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    phone: {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    token: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    quantityPeople: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    detail: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    workingTime: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    website: {
        type: DataTypes.STRING,
        allowNull: true,
    }
},{
    tableName : "company",
    timestamps: false
})

export default Company