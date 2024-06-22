'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Countries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Countries.hasMany(models.User, {
        foreignKey: 'country_code',
        as: 'users'
      });
      Countries.hasMany(models.Merchant, {
        foreignKey: 'country_code',
        as: 'merchants'
      });
    }
  }
  Countries.init({
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    country_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Countries',
  });
  return Countries;
};