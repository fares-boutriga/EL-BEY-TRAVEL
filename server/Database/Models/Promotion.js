const {DataTypes}=require('sequelize')
const sequelize=require('../configdb');
const Hotels = require('./Hotels');
const Chambres = require('./Chambres');
const Promotion = sequelize.define('promotion', {

    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    percentage: {
      type: DataTypes.DECIMAL(3, 0),
      allowNull: true,
    },
    amount: {
      type: DataTypes.INTEGER(),
      allowNull: true,
    },
    type:{
      type:DataTypes.STRING(255),
      allowNull:false
    }
  });

  Promotion.belongsTo(Hotels);
  Hotels.hasMany(Promotion);

  module.exports=Promotion