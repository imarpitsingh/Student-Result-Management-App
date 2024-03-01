const studentController = require('../controllers/studentController.js')

const router =require('express').Router()

router.post('/login',studentController.studentlogin)
router.get('/login',studentController.student_login);
module.exports=router