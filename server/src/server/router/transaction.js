const transactionRouter = require("express").Router();
const TransactionController = require('../controllers/transactionController');

transactionRouter.get("/users", TransactionController.getUserTransactions);
transactionRouter.get("/money", TransactionController.getUserMoneyMovement);
transactionRouter.get('/full', TransactionController.getFullUserTransactionData);

module.exports = transactionRouter;