const teacherController = require('../controllers/teacherController.js')

const router =require('express').Router()

router.post('/addStudent',teacherController.addStudent)
router.get('/viewall',teacherController.viewall)
router.post('/edit',teacherController.editstudent)
router.get('/delete/:id',teacherController.deletedata)
router.post('/login',teacherController.teacherlogin)

router.get('/addStudent',teacherController.teacher_add)
router.get('/login',teacherController.teacher_login)
router.get('/edit/:id',teacherController.updateStudent_call)

module.exports=router