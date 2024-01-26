const {DataTypes}=require('sequelize')
const sequelize =require('../configdb');

const NoilPrice = sequelize.define('noilPrice', {
    noil: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    saintSylvester: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  });

  
  module.exports=NoilPrice