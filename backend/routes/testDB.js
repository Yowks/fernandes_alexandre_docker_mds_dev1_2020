const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
let databaseConnection = "Waiting for Database response...";

router.get("/", function(req, res, next) {    
    res.send(databaseConnection);
});

mongoose.connection.on("error", error => {    
    console.log("Database connection error:", error);    
    databaseConnection = "Error connecting to Database";
});

mongoose.connect("mongodb://mongodb:27017/test");

mongoose.connection.once("open", () => {    
    console.log("Connected to Database!");    
    databaseConnection = "Connected to Database";
});

module.exports = router;