const mongoose = require("mongoose");

//craeting the structure of document = schema
// defining the fields and their types
const ToDoSchema = new mongoose.Schema({
  createdOn:{ 
    type:Date,
  },
  title: {
    type: String,
    required:true,
    trim:true,
    maxlength:20,
  },
  description: {
    type: String,
    required:true,
    trim:true,     // removing the space before and after
    maxlength:120,
  },
  completed: {
    type: Boolean,
    default:false,
  }
});

// Schema is the structure of Documnet / model


//creating a model
//Model is an instance of the schema
const ToDoModel = mongoose.model("ToDo",ToDoSchema);     //("Document name","Schema name")
// module.exports = TodoModel;

//to check the schema and model
// console.log("ToDoSchema", ToDoSchema);
// console.log("ToDoModel", ToDoModel);


module.exports=ToDoModel;

