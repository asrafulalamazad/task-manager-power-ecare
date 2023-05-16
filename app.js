const express = require("express");
const router = require("./src/routes/api");
const app = new express();
const bodyParser = require("body-parser");

//Security Middleware import
const rateLimit= require('express-rate-limit');
const helmet= require('helmet');
const mongoSanitize= require('express-mongo-sanitize');
const xss= require('xss-clean');
const hpp= require('hpp');
const cors= require('cors');

//Database schema
const mongoose =  require('mongoose');
// const path = require("path");

//Security Middleware implements
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(xss());

//bodyParser implements
app.use(bodyParser.json());

// Rate Limiter implements
const limiter = rateLimit({windowMs:15*60*100, max: 3000});
app.use(limiter)
//Database Connection

let URI="mongodb+srv://<username>:<password>@cluster0.kxn7sfi.mongodb.net/TODO?retryWrites=true&w=majority";
let OPTION={user:'testuser',pass:'testuser',autoIndex:true};
mongoose.connect(URI,OPTION,(error)=>{
     console.log("Connection Success")
     console.log(error)
})



// // managing Front End Tagging
// app.use(express.static('client/build'))
// app.get("*",function (req){
//      req.sendFile(path.resolve(__dirname,'client','build','index.html'))
// })



//managing  back end api routing
app.use("/api/v1", router);






module.exports= app;




















