const { DataTypes } = require('sequelize');
const sequelize =require('../configdb');

const Reservation = require('./Reservation');

const RoomPromtonts = sequelize.define('RoomPromtonts', {
    beby: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    TherdBadAduls: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
//   RoomPromtonts.hasMany(Reservation);
//   Reservation.belongsTo(RoomPromtonts);

  module.exports=RoomPromtonts