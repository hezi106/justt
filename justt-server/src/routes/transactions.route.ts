import express from 'express';
import transactionController from '../controllers';

const router = express.Router();

router.route('/').post(transactionController.createTransaction).get(transactionController.getAllTransactions);

router
  .route('/:transactionId')
  .get(transactionController.getTransactionById)
  .patch(transactionController.updateTransaction)
  .delete(transactionController.deleteTransaction);

export default router;
