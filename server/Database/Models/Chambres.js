const {DataTypes}=require('sequelize')
const sequelize =require('../configdb');
const Promotion = require('./Promotion');

const Chambres = sequelize.define('chambres', {
    type: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    nAdult: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    nKids: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    kidsAge: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    baby: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue:false
    },

  });

  Chambres.belongsTo(Promotion);
  Promotion.hasMany(Chambres);

  module.exports=Chambres 