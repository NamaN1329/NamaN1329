const mongoose = require("mongoose");
const DB = process.env.DATABASE;

//create
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then( () => {
    console.log("Connected Successfully");
}).catch( (err) => {
    console.log("Connection Fail");
    console.log(err);
})