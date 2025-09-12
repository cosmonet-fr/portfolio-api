const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.post("/", contactController.sendContact);
router.get("/test", contactController.testContact);

module.exports = router;
