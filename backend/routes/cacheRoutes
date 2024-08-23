const express = require("express");
const router = express.Router();
const redisController = require("../controllers/redisController");

router.post("/", redisController.setCache);

router.get("/", redisController.getCache);
