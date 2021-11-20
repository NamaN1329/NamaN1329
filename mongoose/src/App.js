const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/my_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=>{
    console.log("connection successfully");
}).catch((err)=> { console.log(err)});
///create schema
const Schema = mongoose.Schema({
    name:{type:String,required:true},
    address:{type:String},
    phone:{type:Number},
    status:{type:Boolean}
});
const model = new mongoose.model("User",Schema);

//create doc or insert
const createDocument = async () => {
    try{
        const  userInfo = new model({
            name:"NamaN",
            address:"Raiwala",
            phone:1234567,
            status:true
        });
        const  userData = new model({
            name:"Thapa",
            address:"Raiwala",
            phone:09876554,
            status:true
        });
        const result = await model.insertMany([userInfo,userData]);
    }catch(err){
        console.log(err);
    } 
}

createDocument();
