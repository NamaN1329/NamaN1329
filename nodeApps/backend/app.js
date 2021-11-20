const express = require("express");
const app = express();
// const PORT = 3000;
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({ path : './config.env'})

require("./db/conn");
app.use(express.json());
app.use(require("./router/auth"));


const PORT = process.env.PORT;

app.get("/", (req,res) => {
res.send("This is Express Root")
});

app.listen(PORT, (req,res) => {
console.log("App is running on http://localhost:"+`${PORT}`);
});