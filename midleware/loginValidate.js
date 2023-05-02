"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require('jsonwebtoken');
// function authenticateToken(req, res, next) {
//     if(req.cookies.session){
//       let cookie = JSON.parse(req.cookies.session);
//       const session_id = cookie.s_id;   
//       console.log(cookie.s_id)
//       Session.findOne({'_id' : session_id}) 
//       .exec(function(err,session) {
//              if(session && session.refreshToken){
//                  //Refatorar para função - toda geração do token tratato via backend
//                      fetch("http://localhost:"+port+"/api/token", {    
//                        method: 'POST',
//                        headers: {
//                            'Accept': 'application/json',
//                            'Access-Control-Allow-Origin' : '*',
//                        'Content-Type': 'application/json',          
//                        },
//                        mode : 'cors',
//                        body : JSON.stringify({"refreshToken" : session.refreshToken}),
//                })
//              .then(response => response.json())
//              .then (token => {        
//                //console.log(token);
//                jwt.verify(token.accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//                   // console.log(err)
//                    if (err) return res.sendStatus(403)
//                    req.user = user;
//                    req.token = token;  
//                    req.idUser = session.usuario;
//                  next()
//              })
//            }).catch(err => { console.log(err)});
//    } //Cookie no cliente existe, mas session não existe no banco de dados, resultado de logout
//      //Redireciona para login para usuário se autentique novamente.
//    })
//     }else if(req.headers['authorization']){
//            const authHeader = req.headers['authorization']
//            const token = authHeader && authHeader.split(' ')[1]
//            if (token == null) return res.sendStatus(401)
//            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//             // console.log(err)
//              if (err) return res.sendStatus(403)
//              req.user = user;
//              req.token = token;
//              next();
//            })
//      }else{
//          res.sendStatus(401);
//      }
//    }
