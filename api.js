require('dotenv').config()
const express = require("express");
const cors = require('cors');
const app = express();
const db = require("./config/db")
app.use(cors());
app.use(express.json())

db.on("connected", function () {
    console.log("connected!");
});

db.on("disconnected", function () {
    console.log("disconnected!");
});

db.on("error", function (error) {
    console.log('Connection error: ' + error);
});

require("./config/routes")(app);

app.listen(3000, () => {
    console.log("Server running port 3000");
});

