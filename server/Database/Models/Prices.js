const {DataTypes}=require('sequelize')
const sequelize=require('../configdb');
const Hotels = require('./Hotels');
const Periods = require('./Periods');

const Prices = sequelize.define('prices', {
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  

  module.exports=Prices