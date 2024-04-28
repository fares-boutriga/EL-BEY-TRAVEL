const reouter=require('express').Router()
const{createResservation}=require('../Controllers/ReservationControler')

reouter.post('/add/:adminId',createResservation)

module.exports=reouter