const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: './config.env' });

const PORT = process.env.PORT;

app.use(require('./router/auth1'));

const middleware = (req,res,next) => {
// res.send("this is middleware")
console.log("this is middle from root")
next()
}


app.get( "/", middleware, (req,res) => {
  res.send("This is root")
  console.log("This is express home");
})

app.listen(PORT, (req,res) => {
console.log('App is running in PORT http://localhost:'+`${PORT}`)
});