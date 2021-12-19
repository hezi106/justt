import express from 'express';
import transactionController from '../controllers';

const router = express.Router();

router.route('/').post(transactionController.createFullTransaction).get(transactionController.getAllFullTransactions);

router
  .route('/:transactionId')
  .get(transactionController.getFullTransactionById)
  .patch(transactionController.updateFullTransactionById)
  .delete(transactionController.deleteFullTransactionById);

export default router;
