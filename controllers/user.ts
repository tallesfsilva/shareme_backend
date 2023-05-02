
import { Request, Response } from "express";
import { UserType } from "../types";

var User = require('../models/user');
var type = require('../types/index')

var express = require('express');
var router = express.Router();



router.post('/login', async function (req: Request, res : Response, next){

    try {
  
        if(req.body && req.body.name && req.body.email && req.body.idGoogle && req.body.picture){

            var userData: UserType = {
                name : req.body.name,
                email : req.body.email,
                idGoogle : req.body.idGoogle,
                image: req.body.picture      
            }    

            const user = new User(userData);
            const data = await user.save();

            if(data.msg){
                res.json({msg: data.msg, user: data.user})
            }else if(data && data.name){
                res.json({msg: "User Created", user: data});                
            }
            // User.findOne({ 'idGoogle': req.body.idGoogle})
            // .then((foundUser)=>{                
            //         if(foundUser){
            //             res.json({msg: "User Found", user: foundUser})
            //         }else{
            //             var userObj  = User( {
            //                 name : req.body.name,
            //                 email : req.body.email,
            //                 idGoogle : req.body.idGoogle      
            //             })               
            //         userObj.save()
            //         .then((data)=>{         
            //             console.log(data);      
            //             res.json({msg: "User Created", user: data.name});                         
            //         }).catch((err)=>{
            //             return new Error(err)
            //         })              
            //       }
            // }).catch((err)=>{
            //     return new Error(err)
            // })  
        }else{
            res.json({msg: "Missing information"});
        }
        
    } catch (err) {
        next(new Error(err))
    }
   

})


module.exports = router;