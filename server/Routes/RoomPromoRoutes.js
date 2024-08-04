const reouter=require('express').Router()
const{ createRommPromtion, getRommPromtion}=require('../Controllers/RommPromtionController')

reouter.post('/add/:hotelId',createRommPromtion)
reouter.get('/:hotelId',getRommPromtion)

module.exports=reouter