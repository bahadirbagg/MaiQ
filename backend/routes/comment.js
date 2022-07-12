const express = require('express');
const router = express.Router();
const {Question} = require("../models/quest")

router.post('/:id', (req, res) => {
    const {id} = req.params;
    Question.findOne({_id:id}).then((comment) => {
        push = () => {
            comment.comments.push(req.body);
          };
          push()
        comment.save();
    })
})

module.exports = router;
