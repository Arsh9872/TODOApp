const { default: mongoose } = require("mongoose");

// const connecDb = ()=> {      // server runs before DB
//     mongoose
//     .connect("mongodb://localhost:27017/tododb")
//     // .then((result)=>{
//     //     console.log("Database Connected");
//     // })
//     // .catch((err)=>{
//     //     console.error(err);
//     // });
// }

const connecDB = (url) => { 
    // mongoose.connect("mongodb://localhost:27017/tododb")
    mongoose.connect(url);

};

  module.exports = connecDB;
