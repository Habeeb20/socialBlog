const express = require('express')
const mongoose = require("mongoose");
const User = require("../models/model");
const { getAllUser, signup, login } = require('../controller/userController');

const router = express.Router();

router.get("/",getAllUser);
router.post("/signup", signup);
router.post("/login", login)



module.exports = router;