'use strict';
const { Model } = require('sequelize');
const { TRANSACTION_TYPES } = require('../../constants');

module.exports = (sequelize, DataTypes) => {
  class TransactionHistory extends Model {
    static associate(models) {
      TransactionHistory.belongsTo(models.User, {
        foreignKey: "user_id",
        allowNull: false
      })
    }
  };
  TransactionHistory.init({
    operationType: {
      field: "operation_type",
      type: DataTypes.ENUM(...Object.values(TRANSACTION_TYPES)),
      allowNull: false
    },
    sum: {
      type:DataTypes.DECIMAL,
      validate: {
        isNull: false,
        min: 0
      }
    },
    userId: {
      field: "user_id",
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
    underscored: true
  });
  return TransactionHistory;
};