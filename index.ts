require('dotenv').config()

import * as express from "express"
import { Request, Response } from "express"

var user = require('./controllers/user');
var pin = require('./controllers/pin');
var db = require('./database/index');
var cors = require('cors');
var path = require("path")
var bodyParser = require('body-parser');
 


var filesUpload = require('express-fileupload')

//bug
const pathImages = path.join(__dirname, 'images')

const app = express();
app.use(filesUpload());
app.use(cors());
app.use(express.static(pathImages));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // support json encoded bodies
 

app.use('/user', user);
app.use('/pin', pin);






db.connectDB()
.catch((err)=>{
    console.log(err)
});


// import { initializeApp } from "firebase/app";
 
// const firebaseConfig = {

//   apiKey: "AIzaSyC3PBHw4OBaOBLOczEKLV6BoERm0ZCWOZI",

//   authDomain: "shareme-2dbca.firebaseapp.com",

//   projectId: "shareme-2dbca",

//   storageBucket: "shareme-2dbca.appspot.com",

//   messagingSenderId: "990534393945",

//   appId: "1:990534393945:web:2671b6e7400c08f5a49148"

// };


// // Initialize Firebase

//  initializeApp(firebaseConfig);
 



app.listen(3001);