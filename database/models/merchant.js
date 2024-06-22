'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merchants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Merchants.hasMany(models.Products, {
        foreignKey: 'merchant_id',
        as: 'products'
      });
      Merchants.belongsTo(models.Users, {
        foreignKey: 'admin_id',
        as: 'admin'
      });

      Merchants.belongsTo(models.Countries, {
        foreignKey: 'country_code',
        as: 'countries'
      });
    }
  }
  Merchants.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
 
    },
    admin_id: {
      type:  DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    merchant_name: DataTypes.INTEGER,
    email: DataTypes.STRING,
    country_code: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Countries',
        key: 'id'
      }
    },
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Merchants',
  });
  return Merchants;
};