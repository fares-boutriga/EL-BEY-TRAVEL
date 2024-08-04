const { DataTypes } = require('sequelize');
const sequelize =require('../configdb');

const Reservation = require('./Reservation');

const Admin = sequelize.define('Admin', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
  Admin.hasMany(Reservation);
  Reservation.belongsTo(Admin);

  module.exports=Admin