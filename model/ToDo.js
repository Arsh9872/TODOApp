const mongoose = require("mongoose");

//craeting the structure of document = schema
// defining the fields and their types
const ToDoSchema = new mongoose.Schema({
  createdOn: Date,
  title: String,
  description: String,
  completed: Boolean,
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

