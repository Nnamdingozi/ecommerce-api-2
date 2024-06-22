'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      orders.belongsTo(models.User), {
        foreignKey:user_id,
        as: 'user'
      },
      orders.hasMany(models.OrderItems, {
        foreignKey: 'order_id',
        as: 'orderItems'
      })
    }
  }
  orders.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true


    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    status: DataTypes.STRING,
    order_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};