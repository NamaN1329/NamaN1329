const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose.connect(DB,{
    UseNewUrlParser:true,
    UseUnifiedTopology:true
}).then(()=>{
    console.log("connect SuccessFully");
}).catch((err) => {
    console.log("Connection Failed")
    console.log(err);
})

