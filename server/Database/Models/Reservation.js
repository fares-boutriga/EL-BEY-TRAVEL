const {DataTypes}=require('sequelize')
const sequelize =require('../configdb');
const Admin = require('./Admin');
const Chambres = require('./Chambres');
const Hotels = require('./Hotels');

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
    hotelName: {
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
      allowNull: false,
    },
    hotelPayer: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:false
    },
    modePaymentHotel: { //check ou éspace
      type: DataTypes.STRING,
      allowNull: true
    },
    checkNumber: { 
      type: DataTypes.STRING,
      allowNull: true
    },
    dateReglementHotel: { 
      type: DataTypes.DATE,
      allowNull: true
    },
    observation: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    deleteState: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:false
    },
  });

  Reservation.hasMany(Chambres);
  Reservation.hasMany(Hotels);
  Chambres.belongsTo(Reservation);
  // Hotels.belongsTo(Reservation);
  Reservation.belongsTo(Hotels,{foreignKey:'hotelId'})
  module.exports=Reservation
  