'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Column_Of_Order extends Model {
    static associate(models) {
      Column_Of_Order.belongsTo(models.User, {
        foreignKey: 'id_user',
        onDelete: 'CASCADE',
      })

      Column_Of_Order.hasMany(models.Team_Client_Column_Acces, {
        foreignKey: 'id_column_of_order',
        onDelete: 'CASCADE',
      })
    }
  }
  Column_Of_Order.init({
    name: DataTypes.STRING,
    alias: {
      type: DataTypes.STRING,
      // set(value) {
      //   const formattedValue = value.replace(/ /g, "_");
      //   this.setDataValue('alias', formattedValue);
      // },
      // get() {
      //   const alias = this.getDataValue('alias');
      //   const formattedAlias = alias.replace(/_/g, " ");
      //   return formattedAlias;
      // }
    },
    isExported: DataTypes.BOOLEAN,
    active: DataTypes.BOOLEAN,
    id_user: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'id_user'
      }
    }
  }, {
    sequelize,
    modelName: 'Column_Of_Order',
  });
  return Column_Of_Order;
};