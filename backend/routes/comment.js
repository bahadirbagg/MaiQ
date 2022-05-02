const express = require('express');
const router = express.Router();
const {Question} = require("../models/quest")

router.post('/:id', (req, res) => {
    console.log("req",req.body)
    const {id} = req.params;
    Question.findOne({id}).then((comment) => {
        console.log("comment",comment)
        push = () => {
            comment.comments.push(req.body);
            console.log("iç req",req.body)
          };
          push()
        console.log("comment",comment)
        comment.save();
    })
})

module.exports = router;
