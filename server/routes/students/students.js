import {Router} from 'express';
import * as studentController from "../../controllers/students/students.js";
import { checkAuth } from '../../middlewares/checkAuth.js';
import { createDir } from '../../middlewares/createDirectory.js';
import { upload } from '../../multer.js';


const router = new Router();

router.post("/",checkAuth,createDir("student"),upload("student").single("image"),studentController.createStudent);
router.put("/:id",checkAuth,studentController.updateStudent);
router.delete("/:id",checkAuth,studentController.deleteStudent);

router.get("/",studentController.getAllStudents);
router.get("/:id",studentController.getOneStudent);

export default router;