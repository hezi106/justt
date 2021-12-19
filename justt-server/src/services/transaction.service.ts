import { Transaction } from 'sequelize';
import sequelize from '../models/db';
import { customerRepository, transactionRepository } from '../repositories';

const createFullTransaction = async (transactionBody: any) => {
  const t = await sequelize.transaction();
  let customer;
  let transaction;
  try {
    customer = await customerRepository.createCustomer(transactionBody.customer, t);
    transaction = await transactionRepository.createTransaction(
      { ...transactionBody.transaction, customer_id: customer.id },
      t
    );
    await t.commit();
  } catch (err: any) {
    await t.rollback();
  }
  return transaction;
};

const getAllFullTransactions = async () => {
  return transactionRepository.getAllTransactions();
};

const getFullTransactionById = async (transactionId: string, t: Transaction | null) => {
  return await transactionRepository.getTransactionById(transactionId, t);
};

const updateFullTransactionById = async (transactionId: string, transactionBody: any) => {
  const t = await sequelize.transaction();
  let transaction;
  let updatedTransaction;
  try {
    transaction = await transactionRepository.getTransactionById(transactionId, t);
    await customerRepository.updateCustomerById(transaction.customer_id, transactionBody.customer, t);
    updatedTransaction = await transactionRepository.updateTransactionById(transaction.id, transactionBody.transaction, t);
    await t.commit();
  } catch (err: any) {
    await t.rollback();
  }
  return updatedTransaction;
};

const deleteFullTransactionById = async (transactionId: string) => {
  const t = await sequelize.transaction();
  let transaction;
  try {
    transaction = await getFullTransactionById(transactionId, t);
    await customerRepository.deleteCustomerById(transaction.customer.id, t);
    await transactionRepository.deleteTransactionById(transaction.id, t);
    await t.commit();
  } catch (err: any) {
    await t.rollback();
  }
  return transaction;
};

export {
  createFullTransaction,
  getAllFullTransactions,
  getFullTransactionById,
  updateFullTransactionById,
  deleteFullTransactionById,
};
