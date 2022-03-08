'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      title: {
        type: Sequelize.STRING,
      },

      author: {
        type: Sequelize.STRING
      },

      pageQuantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'page_quantity'
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });

  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Books');
  }
};
