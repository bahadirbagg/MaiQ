const express = require('express');
const router = express.Router();
const {Question} = require("../models/quest")

router.get('/:id', (req, res) => {
    const {id} = req.params;
    Question.findOne({_id:id}).then((products) => {
        res.json(products);
        })
        .catch((err) => {
            res.json(err)
        })
})

module.exports = router;
