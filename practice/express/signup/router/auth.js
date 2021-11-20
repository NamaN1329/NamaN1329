const User = require('../model/userSchema');
const express = require("express");
//const {Router} = require("express")
const router = express.Router();
const authenticate = require('../middleware/authenticate')
require('../db/conn')

router.get('/',async(req,res) => {
res.send('This is router home');
console.log('router home')
})


module.exports = router;