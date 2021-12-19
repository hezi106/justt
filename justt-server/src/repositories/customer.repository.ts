import httpStatus from 'http-status';
import { Transaction } from 'sequelize';
import { CustomerModel } from '../models';
import ApiError from '../utils/ApiError';

const createCustomer = async (customerBody: any, t: Transaction) => {
  return CustomerModel.create(customerBody, { transaction: t });
};

const getCustomerById = async (id: string, t: Transaction) => {
  return CustomerModel.findByPk(id, { transaction: t });
};

const updateCustomerById = async (customerId: string, customerBody: any, t: Transaction) => {
  const customer = await getCustomerById(customerId, t);
  if (!customer) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Customer not found');
  }
  Object.assign(customer, customerBody);
  await customer.save({ transaction: t });
  return customer;
};

const deleteCustomerById = async (customerId: string, t: Transaction) => {
  const customer = await getCustomerById(customerId, t);
  if (!customer) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Customer not found');
  }
  await customer.destroy({ transaction: t });
  return customer;
};

export { createCustomer, getCustomerById, updateCustomerById, deleteCustomerById };
