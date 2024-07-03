import { DataTypes } from 'sequelize';

//Database connection
import db from '../db/connection';

export const Product = db.define('Product', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DOUBLE
    },
    stock: {
        type: DataTypes.INTEGER
    }
},
{
    tableName: 'products',
    createdAt: false,
    updatedAt: false
})