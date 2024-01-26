const router=require('express').Router()
const {createPrice}=require("../Controllers/PricesController")

router.post('/createPrice/:hotelId',createPrice)

module.exports=router