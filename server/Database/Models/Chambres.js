const {DataTypes}=require('sequelize')
const sequelize =require('../configdb')

const Chambres = sequelize.define('chambres', {
    type: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  });