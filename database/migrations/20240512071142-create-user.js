'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      full_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.INTEGER
      },
      country_code: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
       field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
       field: 'updated_at'
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Users');
  }
};