// src/server.js
const express = require('express');
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser")
const path = require("path")


const connectDb =require('./server/database/connection')

const app = express();

dotenv.config({path:"config.env"})
const PORT =process.env.PORT||8080;

//log require 
app.use(morgan("tiny"))

//mongoDb connection
connectDb();

//parse require to body-parser 
app.use(bodyparser.urlencoded({extended:true}))

//view engine seting 
app.set("view engine","ejs")
// app.set("views",path.resolve(__dirname,"views/ejs"))
//Overall, path.resolve() is helpful for working with file and directory paths in a consistent and platform-independent manner.

//lod assets 
app.use("/css",express.static(path.resolve(__dirname,"assets/css")))
app.use("/img",express.static(path.resolve(__dirname,"assets/img")))
app.use("/js",express.static(path.resolve(__dirname,"assets/js")))

//load router
app.use('/',require('./server/routes/router'))

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
