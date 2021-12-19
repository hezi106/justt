import httpStatus from 'http-status';
import { Transaction } from 'sequelize';
import { TransactionModel, CustomerModel } from '../models';
import ApiError from '../utils/ApiError';

const getAllTransactions = async () => {
  const transactions = await TransactionModel.findAll({
    include: {
      model: CustomerModel,
      as: 'customer',
    },
  });
  return transactions;
};

const getTransactionById = async (transactionId: string, t: Transaction | null) => {
  return TransactionModel.findByPk(transactionId, {
    include: {
      model: CustomerModel,
      as: 'customer',
    },
    transaction: t,
  });
};

const updateTransactionById = async (transactionId: string, transactionBody: any, t: Transaction) => {
  const transaction = await getTransactionById(transactionId, t);
  if (!transaction) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Transaction not found');
  }
  Object.assign(transaction, transactionBody);
  await transaction.save({ transaction: t });
  return transaction;
};

export { updateTransactionById, getAllTransactions, getTransactionById };
