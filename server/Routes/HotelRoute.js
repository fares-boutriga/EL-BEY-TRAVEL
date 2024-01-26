const reouter=require('express').Router()
const{createHotel, getHotels,getHotelsByLocation}=require('../Controllers/HotelsControllers')

reouter.post('/createHotel',createHotel)
reouter.get('/getHotels',getHotels)
reouter.post('/getHotelLocation',getHotelsByLocation)
module.exports=reouter