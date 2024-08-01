const express = require("express");
const PORT =5000;
const app = express();

app.get("/",(req,res)=>{
    res.send("API home");
});

app. listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
});