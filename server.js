const express = require('express');

const app = express();


const mongoose = require('mongoose');

const cors = require('cors');

const jwt = require('jsonwebtoken')


// const axios = require('axios')

var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

// app.use(axios())

app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

require('./database/connection');


//Multer

const fileRoutes = require("./routes/files");

app.use('/uploads', express.static('uploads'));

app.use("/file",fileRoutes);






// Server Listener

app.listen(4444,()=>{
    console.log("Server is running on Port Number 4444");
})