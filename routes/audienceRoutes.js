const express = require("express");
const router = express.Router();
const audienceController = require("../controllers/audienceController");

// Routes API
router.get("/counter/:id", audienceController.getCounter);
router.get("/:id", audienceController.getAudience);
router.get("/getall", audienceController.getAll);

// Route HTML
router.get("/", audienceController.renderHtmlTable);

module.exports = router;
