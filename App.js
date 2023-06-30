const connectdb = require("./dbconnection/dbconnect")
connectdb();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User  = require ("./models/model");
const controller = require ("./controller/userController");
const bcrypt = require("bcryptjs");

const blogrouter = require("./routes/blogRoute")
const router = require("./routes/userRoute")

const port = process.env.PORT || 23000;
app.use(express.json());

app.use("/api/user",router)
app.use("/api/blog",blogrouter)


app.listen(23000, function(){
    console.log("server is running on port " + port )
})