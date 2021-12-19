
import httpStatus from 'http-status';
import ApiError from '../utils/ApiError';
import catchAsync from '../utils/catchAsync';
import { transactionService } from '../services';

const createFullTransaction = catchAsync(async (req: any, res: any) => {
  const transaction = await transactionService.createFullTransaction(req.body);
  res.status(httpStatus.CREATED).send(transaction);
});

const getAllFullTransactions = catchAsync(async (req: any, res: any) => {
  const transactions = await transactionService.getAllFullTransactions();
  res.send(transactions);
});

const getFullTransactionById = catchAsync(async (req: any, res: any) => {
  const transaction = await transactionService.getFullTransactionById(req.params.transactionId , null);
  if (!transaction) {
    throw new ApiError(httpStatus.NOT_FOUND, 'transaction not found');
  }
  res.send(transaction);
});

const updateFullTransactionById = catchAsync(async (req: any, res: any) => {
  const transaction = await transactionService.updateFullTransactionById(req.params.transactionId, req.body);
  res.send(transaction);
});

const deleteFullTransactionById = catchAsync(async (req: any, res: any) => {
  await transactionService.deleteFullTransactionById(req.params.transactionId);
  res.status(httpStatus.NO_CONTENT).send();
});

export {
  createFullTransaction,
  getFullTransactionById,
  getAllFullTransactions,
  updateFullTransactionById,
  deleteFullTransactionById,
};
