const { Sequelize } = require('sequelize');
require('dotenv').config()
const sequelize = new Sequelize('ecoclicko', process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false, 
  },
});

module.exports=sequelize