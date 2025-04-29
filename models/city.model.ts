
import { DataTypes } from 'sequelize';
import sequelize from '../config/database'; // Đảm bảo đường dẫn đúng với cấu hình Sequelize của bạn

const City = sequelize.define("City", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
}, {
    tableName : "city",
    timestamps: false    // ← Tắt createdAt & updatedAt
});


export default City
