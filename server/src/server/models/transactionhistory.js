'use strict';
const { Model } = require('sequelize');
const { TRANSACTION_TYPES } = require('../../constants');

module.exports = (sequelize, DataTypes) => {
  class TransactionHistory extends Model {
    static associate(models) {
      TransactionHistory.belongsTo(models.User, {
        foreignKey: "userId",
        allowNull: false
      })
    }
  };
  TransactionHistory.init({
    operationType: {
      type: DataTypes.ENUM(...Object.values(TRANSACTION_TYPES)),
      allowNull: false
    },
    sum: {
      type:DataTypes.DECIMAL,

    },
    userId: {
      type:DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id"
      }
    },
    updatedAt: false
  }, {
    sequelize,
    modelName: 'TransactionHistory',
    tableName: "transactionHistory",
  });
  return TransactionHistory;
};