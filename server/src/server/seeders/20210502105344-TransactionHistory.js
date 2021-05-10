'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("transactionHistory", [
      {
        operationType: "income",
        sum: 1500,
        userId: 1,
        createdAt: new Date()
      },
      {
        operationType: "consumption",
        sum: 250,
        userId: 1,
        createdAt: new Date()
      },
      {
        operationType: "income",
        sum: 100,
        userId: 1,
        createdAt: new Date()
      },
      {
        operationType: "consumption",
        sum: 500,
        userId: 1,
        createdAt: new Date()
      }
    ],
    {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
