const transactionRouter = require("express").Router();
const TransactionController = require('../controllers/transactionController');

transactionRouter.get("/users", TransactionController.getUserTransactions);
transactionRouter.get("/money", TransactionController.getUserMoneyMovement);


module.exports = transactionRouter;