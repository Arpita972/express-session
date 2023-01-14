import express from 'express'
import StudentController from '../controllers/studentController.js'
const router=express.Router()


router.get('/getsession',StudentController.get_seesioninfo)
router.get("/setsession", StudentController.set_sessioninfo);
router.get("/deletesession", StudentController.delete_session);





export default router