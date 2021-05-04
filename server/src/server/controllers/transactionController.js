const createHttpError = require('http-errors');
const { isEmpty } = require('lodash');
const { TransactionHistory } = require('../models');

module.exports.getUserTransactions = async (req, res, next) => {
  try {
    const { tokenData } = req;
    
    const userTransactions = await TransactionHistory.findAll({
      where: {userId: tokenData.userId},
      attributes: { exclude: ['updatedAt', 'userId'] }
    });

    if(isEmpty(userTransactions)) {
      res.status(204).send();
    }

    res.send({data: userTransactions})
  } catch (error) {
    next(error);
  }
}

module.exports.getUserMoneyMovement = async (req, res, next) => {
  try {
    const { tokenData } = req;

    const userIncome = await TransactionHistory.aggregate("sum", "sum", {
      where: {
        userId: tokenData.userId,
        operationType: "income"
      }
    });

    const userConsumption = await TransactionHistory.aggregate("sum", "sum", {
      where: {
        userId: tokenData.userId,
        operationType: "consumption"
      }
    });

    res.send({data: {INCOME: userIncome, CONSUMPTION: userConsumption}})
  } catch (error) {
    next(error);
  }
}