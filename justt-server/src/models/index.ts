import CustomerModel from './customer.model';
import TransactionModel from './transaction.model';

CustomerModel.hasMany(TransactionModel, { foreignKey: 'customer_id' });
TransactionModel.belongsTo(CustomerModel, { foreignKey: 'customer_id' });

export { CustomerModel, TransactionModel };
