const express = require('express');
const router = express.Router();
const {Question} = require("../models/quest")

router.get('/', (req, res) => {
    
       Question.find()
       .then((products)=> {
           res.json(products);
       })
       .catch((err) => {
           res.json(err)
       })
     
})

module.exports = router;
