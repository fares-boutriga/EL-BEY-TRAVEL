const router=require('express').Router()
const {createPeriod}=require("../Controllers/PeriodsController")

router.post('/createPeriode',createPeriod)

module.exports=router