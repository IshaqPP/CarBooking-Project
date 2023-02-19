const dotenv = require("dotenv");
const express = require('express');
const connectDB = require('./config/db')

const app = express();
dotenv.config();
connectDB();

app.get("/", (req, res) => {
    res.send("welcome");
})

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`
    )
);