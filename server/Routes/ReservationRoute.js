const reouter=require('express').Router()
const{createReservation, getReservations, payReservation}=require('../Controllers/ReservationControler')

reouter.post('/add/:adminId',createReservation)
reouter.get('/all',getReservations)
reouter.put('/pay/:reservationId',payReservation)

module.exports=reouter