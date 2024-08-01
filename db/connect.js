const { default: mongoose } = require("mongoose");

const connecDb = ()=> {
    mongoose
    .connect("mongodb://localhost:27017/tododb")
    .then((result)=>{
        console.log("Database Connected");
    })
    .catch((err)=>{
        console.error(err);
    });
}

  module.exports = connecDb;
