const reouter=require('express').Router()
const{createPromotion}=require('../Controllers/PromtionController')

reouter.post('/createPromotion',createPromotion)

module.exports=reouter