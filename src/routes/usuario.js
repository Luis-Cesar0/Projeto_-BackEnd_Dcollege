
const {controlergetUserId,controllerPostUser,controllerPutUser,controlergetDeleteUser}= require('../controllers/contollerUsuarios');
const express=require('express');
const routerUsuario = express.Router()
const authorization = require('../middleware/authentication')


 
routerUsuario.get('/:id',(req,res)=>{
    controlergetUserId(req,res)
})
routerUsuario.post('/',authorization,(req,res)=>{
    controllerPostUser(req,res)
})
routerUsuario.put('/:id',authorization,(req,res)=>{
    controllerPutUser,authorization,(req,res)
})
routerUsuario.delete('/:id',authorization,(req,res)=>{
    controlergetDeleteUser(req,res)
})

module.exports= routerUsuario


