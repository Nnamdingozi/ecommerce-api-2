'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'phone', {
      type: Sequelize.BIGINT, // Change the data type to BIGINT
      allowNull: false, // Adjust as needed
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'phone', {
      type: Sequelize.INTEGER, // Revert the data type to INTEGER if needed
      allowNull: false, // Adjust as needed
    });
  },
};