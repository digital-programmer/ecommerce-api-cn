require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.port || 8000;
const db = require("./config/mongoose");


// In-built Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use express router to connect
app.use("/", require("./routes"));

// server starting point
app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running server: ${err}`);
        return;
    }
    console.log(`Server is running on port ${port}`);
});