const dotenv = require("dotenv");
const express = require('express');
var db = require('./config/db')
const cors = require('cors')
const bodyParser = require('body-parser');
const userRouter = require('./Routers/User');
const adminRouter = require('./Routers/Admin');

const app = express();
dotenv.config();
app.use(cors())
app.use(bodyParser.json());

db.connect((err) => {
    if (err)
        console.log("Connection failed" + err);
    else
        console.log("Connection success");
});

app.use('/', userRouter);
app.use('/Admin', adminRouter);



// app.use(bodyParser.json());

app.post('/api/submitForm', (req, res) => {
    const formData = req.body;
    console.log(formData);

    // Handle the form data and send a response
    res.send('Form submitted successfully');
});

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`
    )
);