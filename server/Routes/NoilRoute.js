const router=require('express').Router()
const {createNoil}=require("../Controllers/NoilController")

router.post('/createNoil/:hotelId',createNoil)

module.exports=router