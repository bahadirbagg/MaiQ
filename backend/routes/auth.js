const express = require('express');
const router = express.Router();
const {User} = require("../models/user")
const Joi = require("joi")
const bcrypt = require("bcrypt")

router.post('/',async (req, res) => {
        const {nickname, password} = req.body;
        
        User.findOne({nickname:nickname}).then((user) => {
        
            if(!user){
                return res.status(401).send({message:"Invalid Nickname"})
            }
            else{
                if(user.password === password){
                    return res.status(201).send({message:"Giriş Başarılı"})
                }
                else{
                    return res.status(401).send({message:"Yanlış Şifre"})
                }
            }

        })
       
            
})


module.exports = router;