import sequelize from '../config/database';
import { DataTypes } from 'sequelize';

const Tags = sequelize.define("Tags", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    tableName : "tags",
    timestamps : false
});

export default Tags;
