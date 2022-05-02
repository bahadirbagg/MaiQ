const express = require('express');
const router = express.Router();
const {User} = require("../models/user")

router.post('/', (req, res) => {
    console.log(req.body.nickname)
    console.log(req.body.password)
      
        User.findOne({nickname:req.body.nickname}).then((user) => {
            const {error} = req.body;
            if(error){
                return res.status(400).send({message:error.details[0].message});
            }
            if(user){
                return res.status(409).send({message:"Oops! Username already taken!"})
            }
            if(!user){
                return res.status(200).send({message:"Alright! Username available!!!"})
            }
            else{
                user = new User({
                    fullname:req.body.fullname,
                    nickname:req.body.nickname,
                    email:req.body.email,
                    password:req.body.password,
                    coin:req.body.coin
                })
                user.save()
                return res.status(201).send({message:"User Created Successfully"})
            }
        })
})

module.exports = router;
