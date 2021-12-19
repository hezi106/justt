import sequelize from './db';
import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

const TransactionModel = sequelize.define<any>('transaction', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: function () {
      return uuidv4();
    },
  },
  currency: {
    type: DataTypes.STRING,
  },
  amount: {
    type: DataTypes.INTEGER,
  },
});
export default TransactionModel;
