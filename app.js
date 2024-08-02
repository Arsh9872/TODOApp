const express = require("express");
const connecDb = require("./db/connect");
const connecDB = require("./db/connect");

const PORT =5000;

const app = express();

const start = async () => {    //async = code/DB is time taking

    try {
        await connecDb();
        console.log("Database Connected");
    app. listen(PORT,()=>{
        console.log(`server running on ${PORT}`);
    });
    } 
    catch (error) {
        console.log(error);
    }

};

start();

// ANother way

// connecDb.then(()=>{
//     console.log("Database Connected");
//     app. listen(PORT,()=>{
//         console.log(`server running on ${PORT}`);
//     });
// })
// .catch((err)=>{
//     console.log(err);
// });

app.get("/",(req,res)=>{
    res.send("API home");
});

