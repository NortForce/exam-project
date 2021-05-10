'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn(
      'transactionHistory',
      'operation_type',
      'operationType'
    );
    await queryInterface.renameColumn(
      'transactionHistory',
      'user_id',
      'userId'
    );
    await queryInterface.renameColumn(
      'transactionHistory',
      'created_at',
      'createdAt'
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn(
      'transactionHistory',
      'operationType',
      'operation_type'
    );
    await queryInterface.renameColumn(
      'transactionHistory',
      'userId',
      'user_id'
    );
    await queryInterface.renameColumn(
      'transactionHistory',
      'createdAt',
      'created_at'
    );
  },
};
