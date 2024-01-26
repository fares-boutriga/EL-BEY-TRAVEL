const {DataTypes}=require('sequelize')
const sequelize =require('../configdb');
const Periods = require('./Periods');
const Prices = require('./Prices');
const NoilPrice=require('./NoilPrice')
const Hotels = sequelize.define('hotels', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    emailReception: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    emailReservation: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    images: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    responsible: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  });
  Hotels.hasMany(Periods);
  Periods.belongsTo(Hotels);
  Hotels.hasMany(Prices);
  Prices.belongsTo(Hotels);
  Hotels.hasOne(NoilPrice);
  NoilPrice.belongsTo(Hotels)
  
  module.exports=Hotels