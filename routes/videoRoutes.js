const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");

router.get("/counter/:id", videoController.getCounter);
router.get("/:id", videoController.getVideo);

module.exports = router;
