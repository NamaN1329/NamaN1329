const express = require("express");
const Router = express.Router();

Router.get('/', async (req,res) => {
res.send('This express router from auth1');
console.log('This express router from auth1');
});

Router.post('/signup',async (req,res) => {
    // console.log({"body" : req});
    res.send(req.body);

})



module.exports = Router