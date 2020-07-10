const express = require('express');
const router = express.Router();

const classroomController = require("../controllers/classroom")

router.get("/read",classroomController.readAllClassroom)
router.get("/read/:id",classroomController.readOneClassroom)
router.put("/update/:id",classroomController.editClassroom)
router.delete("/delete/:id",classroomController.deleteClassroom)
router.post("/add",classroomController.addClassroom)

module.exports = router;