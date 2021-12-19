import httpStatus from 'http-status';
import ApiError from '../utils/ApiError';
import catchAsync from '../utils/catchAsync';
import { transactionService } from '../services';

const createTransaction = catchAsync(async (req: any, res: any) => {
  const transaction = await transactionService.createFullTransaction(req.body);
  res.status(httpStatus.CREATED).send(transaction);
});

const getAllTransactions = catchAsync(async (req: any, res: any) => {
  const transactions = await transactionService.getAllFullTransactions();
  res.send(transactions);
});

const getTransactionById = catchAsync(async (req: any, res: any) => {
  const transaction = await transactionService.getFullTransactionById(req.params.transactionId, null);
  if (!transaction) {
    throw new ApiError(httpStatus.NOT_FOUND, 'transaction not found');
  }
  res.send(transaction);
});

const updateTransaction = catchAsync(async (req: any, res: any) => {
  const transaction = await transactionService.updateFullTransactionById(req.params.transactionId, req.body);
  res.send(transaction);
});

const deleteTransaction = catchAsync(async (req: any, res: any) => {
  await transactionService.deleteFullTransactionById(req.params.transactionId);
  res.status(httpStatus.NO_CONTENT).send();
});

export { createTransaction, getTransactionById, getAllTransactions, updateTransaction, deleteTransaction };
