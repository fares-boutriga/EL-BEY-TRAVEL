const express =require('express')
const cors =require('cors')
// import bcrypt from "bcrypt"
const sequelize =require('./Database/configdb')
const cookieParser = require('cookie-parser')
const AdminRoute=require('./Routes/AdminRoute')
const HotelRouter=require('./Routes/HotelRoute')
const PeriodsRoutes=require('./Routes/PeriodsRoute')
const PricesRoutes=require('./Routes/PricesRoute')
const NoilRoutes=require('./Routes/NoilRoute')
const PromotionRoutes=require('./Routes/PromotionRoute')
const ReservationRoutes=require('./Routes/ReservationRoute')
const RoomPrormoRoutes=require('./Routes/RoomPromoRoutes')
const app =express()
app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:3000', // Specify your frontend domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials (cookies, headers) for cross-origin requests
    optionsSuccessStatus: 204, // Some legacy browsers choke on 204
  })
);
app.use(cookieParser())

app.use('/app/admin',AdminRoute)
app.use('/app/hotel',HotelRouter)
app.use('/app/perid',PeriodsRoutes)
app.use('/app/price',PricesRoutes)
app.use('/app/noil',NoilRoutes)
app.use('/app/promotion',PromotionRoutes)
app.use('/app/reservation',ReservationRoutes)
app.use('/app/roomPromo',RoomPrormoRoutes)


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