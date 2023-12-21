const {DataTypes}=require('sequelize')
const sequelize =require('../configdb')
const Hotels =require('./Hotels');
const Prices = require('./Prices');
const Periods = sequelize.define('periods', {
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  Prices.belongsTo(Periods);
  Periods.hasMany(Prices);

  module.exports=Periods