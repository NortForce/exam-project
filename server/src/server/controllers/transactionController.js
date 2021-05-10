const createHttpError = require('http-errors');
const { isEmpty } = require('lodash');
const { User, TransactionHistory, sequelize } = require('../models');

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
    const { tokenData:{userId} } = req;

    const user = await User.findByPk(userId);

    if(!user) {
      return next(createHttpError(404, 'User not found'));
    }

    const income = await user.getTransactionHistories({
      group: 'operationType',
      attributes: {
        exclude:['createdAt','updatedAt', 'id', 'userId', 'sum'],
        include: [[sequelize.fn('sum', sequelize.col('sum')), 'total']],
      }
    })

    res.send({data: income})
  } catch (error) {
    next(error);
  }
}

module.exports.getFullUserTransactionData = async (req, res, next) => {
  try {
    const { tokenData: {userId}} = req;

    const user = await User.findByPk(userId);

    if(!user) {
      return next(createHttpError(404, 'User not found'));
    }

    const userTransactionHistory = await user.getTransactionHistories({
      attributes: {
        exclude: ['createdAt', 'userId', 'updatedAt']
      }
    })

    const aggregatedUserTransactions = await user.getTransactionHistories({
      group: 'operationType',
      attributes: {
        exclude:['createdAt','updatedAt', 'id', 'userId', 'sum'],
        include: [[sequelize.fn('sum', sequelize.col('sum')), 'total']],
      }
    })
    
    const aggregatedMoneyMovement = {};
    aggregatedUserTransactions.forEach(( {dataValues:{operationType, total}}) => {
      aggregatedMoneyMovement[operationType] = total;
    })

    res.status(200).send({data: {userTransactionHistory, aggregatedMoneyMovement}})
  } catch (error) {
    next(error);
  }
}