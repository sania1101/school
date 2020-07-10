const express = require('express');
const router = express.Router();

const groupController = require("../controllers/group")

router.get("/read", groupController.readAllGroup)
router.get("/read/:id", groupController.readOneGroup)
router.put("/update/:id", groupController.editGroup)
router.delete("/delete/:id", groupController.deleteGroup)
router.post("/add", groupController.addGroup)

module.exports = router;