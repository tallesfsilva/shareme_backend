require('dotenv').config();


var mongoose = require('mongoose');



export const connectDB = async ()=>{
    try {
        mongoose.connect(process.env.URL_MONGODB_CONNECT, { useNewUrlParser: true , useUnifiedTopology: true})
    } catch (error) {
        throw new Error('Error while connecting in DataBase, please try latter');        
    };     

}



