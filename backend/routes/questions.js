const express = require('express');
const router = express.Router();
const {Question} = require("../models/quest")

router.post('/', (req, res) => {
    console.log(req.body.nickname)
        Question.findOne({question:req.body.question}).then((quest) => {
            const {error} = req.body;
            if(quest){
                return res.status(409).send({message:"Question already exist"})
            }
            else{
                quest = new Question({
                    nickname:req.body.nickname,
                    title:req.body.title,
                    question:req.body.question,
                })
                quest.save() 
                return res.status(201).send({message:"Question Created Successfully"})
            }
        })
})

module.exports = router;
