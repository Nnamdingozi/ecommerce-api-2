'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.orders, {
        foreignKey: 'user_id',
        as: 'orders'
      });
      User.hasMany(models.Merchant, {
        foreignKey: 'admin_id',
        as: 'merchants'
      });
      User.belongsTo(models.Countries, {
        foreignKey: 'ountry_code',
        as: 'countries'
      });
      
    }
  }
  User.init({
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.BIGINT,
    country_code: 
    {
      type: DataTypes.STRING,
      references: {
        model: 'Countries',
        id: 'id'
      }

    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users'
  });
  return User;
};