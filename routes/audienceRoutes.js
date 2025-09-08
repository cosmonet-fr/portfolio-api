const express = require("express");
const router = express.Router();
const audienceController = require("../controllers/audienceController");

router.get("/counter/:id", audienceController.getCounter);
router.get("/:id", audienceController.getAudience);
router.get("/", audienceController.getAll);

module.exports = router;
