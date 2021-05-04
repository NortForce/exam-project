'use strict';

const { TRANSACTION_TYPES } = require('../../constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transactionHistory', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      operationType: {
        field: "operation_type",
        type: Sequelize.ENUM(...Object.values(TRANSACTION_TYPES)),
        allowNull: false
      },
      sum: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: 0
      },
      userId: {
        field: "user_id",
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id"
        }
      },
      createdAt: {
        field: "created_at",
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('transactionHistory');
  }
};