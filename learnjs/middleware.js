const express = require("express");
const CustomError = require("../error/customerror");
// const CustomError = require("CustomError");

const app = express();
app.use(middleware1);
app.use(middleware2);
app.use(errorhandler);

function middleware1(req,res,next){
    console.log("middleawre 1 called");
    next();
}

function middleware2(req,res , next){
    console.log("Middleware 2 called");
    // next(new Error("error in middleware 2"));

    // custom error import
    const error = new CustomError("One more error",404);
    // console.log(error);
    next(error);
    
}

function errorhandler(err, req,res,next) {
    console.log(err.message);
    console.log(err.statuscode);
    res.send("error occured");
    
}

app.get("/test",(req,res)=>{
    console.log("routing method called");
    res.send("middleware log");
    
});

app.listen(8000, ()=>{
    console.log(`server running on port 8000`);
});