const express = require('express');
const router = express.Router();

const studentController = require("../controllers/student")

router.get("/read", studentController.readAllStudent)
router.get("/read/:id", studentController.readOneStudent)
router.put("/update/:id", studentController.editStudent)
router.delete("/delete/:id", studentController.deleteStudent)
router.post("/add", studentController.addStudent)

module.exports = router;