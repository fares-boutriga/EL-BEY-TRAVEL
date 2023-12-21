const {DataTypes}=require('sequelize')
const sequelize =require('../configdb');
const Promotion = require('./Promotion');

const Chambres = sequelize.define('chambres', {
    type: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  });

  Chambres.belongsTo(Promotion);
  Promotion.hasMany(Chambres);

  module.exports=Chambres 