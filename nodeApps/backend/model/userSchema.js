const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userSchema = new mongoose.Schema({
                    name:{
                        type:String,
                        required:true
                    },
                    email:{
                        type:String,
                        required:true
                    },
                    phone:{
                        type:String,
                        required:true
                    },
                    password:{
                        type:String,
                        required:true
                    },
                    cnpassword:{
                        type:String,
                        required:true
                    },
                    tokens:[{
                        token:{
                            type:String,
                            required:true
                        }
                    }]
                    })

userSchema.pre("save", async function(next){

    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12)
        this.cnpassword = await bcrypt.hash(this.cnpassword,12)
    }
next();
});

///generate token
userSchema.method.generateAuthToken = async function() {
try{
    let token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({token:token});
    await this.save();
    return token;
}
catch(err){
    console.log(err);
}
};

const Customer = mongoose.model("CUSTOMER",userSchema);

module.exports = Customer;