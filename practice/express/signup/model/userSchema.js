const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email:{
        type : String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
})

const User = new mongoose.model("USER",userSchema);

module.exports =  User;