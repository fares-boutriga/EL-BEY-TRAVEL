const {DataTypes}=require('sequelize')
const sequelize =require('../configdb');
const Admin = require('./Admin');
const Chambres = require('./Chambres');

const Reservation = sequelize.define('reservation', {
    referance: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    client: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    teleClient: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    hotel: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    dateReservation: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    chekin: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    checkout: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    nombreJours: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    nombreChambres: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    payer: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    reste: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    cotisationHotel: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  Reservation.hasMany(Chambres);
  Chambres.belongsTo(Reservation);
  module.exports=Reservation
  