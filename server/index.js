const express =require('express')
const cors =require('cors')
// import { Jwt } from "jsonwebtoken";
// import bcrypt from "bcrypt"
const sequelize =require('./Database/configdb')
const cookieParser = require('cookie-parser')
const AdminRoute=require('./Routes/AdminRoute')
const app =express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/app/admin',AdminRoute)


sequelize.sync() // You may use { force: true } to drop and recreate tables
.then(() => {
  console.log('Database connected');
})
.catch((err) => {
  console.error('Error syncing database:', err);
});

const PORT=5000
app.listen(PORT,()=>{
  console.log('listening on port '+ PORT)
})