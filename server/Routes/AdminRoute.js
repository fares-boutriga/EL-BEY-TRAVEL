const router=require('express').Router()
const {createUser, login}=require('../Controllers/AdminControler')

router.post('/createUser',createUser)
router.post('/login',login)
module.exports=router 