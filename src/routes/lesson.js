const express = require('express');
const router = express.Router();

const lessonController = require("../controllers/lesson")

router.get("/read",lessonController.readAllLesson)
router.get("/read/:id",lessonController.readOneLesson)
router.put("/update/:id",lessonController.editLesson)
router.delete("/delete/:id",lessonController.deleteLesson)
router.post("/add",lessonController.addLesson)

module.exports = router;