const express = require("express");
const router = express.Router();
const Customer = require('../model/userSchema');
const authenticate = require('../middleware/authenticate');

router.get("/", (req,res) => {
    res.send("This is Router");
    console.log("Console router"+`${req.body}`)
})

router.post("/signup", async (req,res) => {
const {name,email,phone,password,cnpassword} = req.body;
if (!name || !email || !phone || !password || !cnpassword) {
    return res.status(422).json({error:"Please fill all field properly"})
}
try {
    ///check already exist or not
    const userExist = Customer.findOne({email:email})
    if (userExist) {
        return res.status(422).json({error:"This Email is Already exist"})
    }
    const user = new Customer({name,email,phone,password,cnpassword});
    const userReg = await user.save();
    res.status(200).json({message:"Data Inserted Successfully"})
} catch (error) {
    console.log(error);
    res.status(422).json({error:error})
}
});

module.exports = router;
