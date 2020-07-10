const express = require('express');
const router = express.Router();

const teacherController = require("../controllers/teacher")

router.get("/read", teacherController.readAllTeacher)
router.get("/read/:id", teacherController.readOneTeacher)
router.put("/update/:id", teacherController.editTeacher)
router.delete("/delete/:id", teacherController.deleteTeacher)
router.post("/add", teacherController.addTeacher)

module.exports = router;