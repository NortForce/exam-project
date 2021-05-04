'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("transactionHistory", [
      {
        operation_type: "income",
        sum: 1500,
        user_id: 1,
        created_at: new Date()
      },
      {
        operation_type: "consumption",
        sum: 250,
        user_id: 1,
        created_at: new Date()
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
