const express = require("express");
const TestController = require("../controller/TestController");
const { authenticate } = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/add-two-numbers", authenticate, TestController.addNumber);

module.exports = router;
