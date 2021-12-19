import express from 'express';
import transactionsRoute from './transactions.route';

const router = express.Router();

const routes = [
  {
    path: '/transactions',
    route: transactionsRoute,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
