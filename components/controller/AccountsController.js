require("dotenv").config({ path: "./components/config/.env" });
const express = require("express");
const router = express.Router();
const axios = require("axios");
router.use(express.json());


module.exports = router;