const {DataTypes}=require('sequelize')
const sequelize=require('../configdb');
const Hotels = require('./Hotels');
const Chambres = require('./Chambres');
const Promotion = sequelize.define('promotion', {
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    promotion: {
      type: DataTypes.DECIMAL(3, 0),
      allowNull: false,
    },
  });

  Promotion.belongsTo(Hotels);
  Hotels.hasMany(Promotion);

  module.exports=Promotion