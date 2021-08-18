const express = require("express");
const router = express.Router();
const workoutRoutes = require("./workout");
const htmlRoutes = require("./html");

router.use("/api", workoutRoutes);
router.use("/", htmlRoutes);

module.exports = router;