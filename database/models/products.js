'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.belongsTo(models.Merchants, {
        foreignKey: 'merchant_id',
        as: 'merchant'
      });
      Products.belongsTo(models.Category, {
        foreignKey: 'category_id',
        as: 'category'
      });

      Products.hasMany(models.OrderItems, {
        foreignKey: 'product_id',
        as: 'orderItems'
      });

    }
  }
  Products.init({
    id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     primaryKey: true,
     autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    merchant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
       model: 'Merchants',
        key: 'id'
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false

    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }, 
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: 'Category',
      key: 'id'

    }
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};