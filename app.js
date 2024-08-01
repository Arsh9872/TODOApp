const express = require("express");
const connecDb = require("./db/connect");

const PORT =5000;

const app = express();

connecDb();

app.get("/",(req,res)=>{
    res.send("API home");
});

app. listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
});