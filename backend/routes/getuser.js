const express = require('express');
const router = express.Router();
const {User} = require("../models/user")

router.get('/', (req, res) => {
      
       User.find()
       .then((products)=> {
           res.json(products);
       })
       .catch((err) => {
           res.json(err)
       })
     
})

module.exports = router;
