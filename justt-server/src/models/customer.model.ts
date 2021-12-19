import sequelize from './db';
import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

const CustomerModel = sequelize.define<any>('customer', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue() {
      return uuidv4();
    },
  },
  first_name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  credit_card_type: {
    type: DataTypes.STRING,
  },
  credit_card_number: {
    type: DataTypes.STRING,
  },
});

export default CustomerModel;
