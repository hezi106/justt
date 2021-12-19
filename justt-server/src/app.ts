import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import httpStatus from 'http-status';

import routes from './routes';
import { errorConverter, errorHandler } from './middlewares/error';
import ApiError from './utils/ApiError';
import customers from './customers.json';
import transactions from './transactions.json';
import { CustomerModel, TransactionModel } from './models';
import sequelize from './models/db';

const app = express();

sequelize.sync({ force: true }).then(async () => {
  // initial db data
  await CustomerModel.bulkCreate(customers);
  await TransactionModel.bulkCreate(transactions);
});

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(compression());

app.use(cors());

app.use('/api', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

export default app;
