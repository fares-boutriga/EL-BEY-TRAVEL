const router=require('express').Router()
const {createUser, login}=require('../Controllers/AdminControler')

router.post('/register',createUser)
router.post('/login',login)
module.exports=router 