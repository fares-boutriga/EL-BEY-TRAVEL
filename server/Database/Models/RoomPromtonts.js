const { DataTypes } = require('sequelize');
const sequelize =require('../configdb');

const Hotels = require('./Hotels');

const RoomPromtonts = sequelize.define('RoomPromtonts', {
    baby: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    towKisTowAdult: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    towKisOneAdult: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    maxThreeKids: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    theardBad: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    promotionTypePrtcentage: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:false
    }
  })
//   RoomPromtonts.hasMany(Reservation);
RoomPromtonts.belongsTo(Hotels,{foreignKey:'hotelId'});
Hotels.hasMany(RoomPromtonts);
  module.exports=RoomPromtonts