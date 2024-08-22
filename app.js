const express = require("express");
const connecDb = require("./db/connect");

// const connecDB = require("./db/connect");
require("dotenv").config();
require("ejs");
// const TodoModel = require("./model/ToDo.js");
const notfound = require("./middleware/notfound.js");
const router = require("./routes/todo.js");
const cors = require("cors");
const errorHandler = require("./middleware/CustomErrorHandler.js");


const PORT = 5000;

const app = express();

// app level setting

app.set("view engine","ejs");      // using ejs template


//middleware

app.use(cors());               // single origion port/point   // cross origion requests
// for handling json data
app.use(express.json());
//for static files, public folder will be used
app.use(express.static("public"));

app.get("/",(req,res)=>{
  // res.send("<h2> Home Page</h2> ");
  res.render("index.ejs",
    {
    title: "ToDos",
  });
});

// app.get("/todospage",(req,res)=>{
  // db call to fetch todo document
//   res.render("todospage.ejs",{ todos });
// })

// all requests with go to router
app.use("/api/v1/todos", router);
// invalid request
app.use(notfound);

app.use(errorHandler);




const start = async () => {
  //async = code/DB is time taking

  try {
    // await connecDb("mongodb://localhost:27017/tododb");   // method 1

    // DB_URL is environment variable
    await connecDb(process.env.DB_URL);
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`server running on ${PORT}`);
    });
  } catch (error) {
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

// app.get("/", (req, res) => {
//   res.send("API home");
// });

// // CREATE/POST
// app.post("/api/v1/todos", (req, res) => {
//   // error handling for validations
//   try {
//     const ToDo = TodoModel.create(req.body);
//     if (!ToDo) {
//       res.status(404).json({ message: "Coudn't create" });
//     }
//     // add to db
//     res.status(201).json({ message: ToDo });
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }

//   // const data = req.body;
//   // const ToDo = TodoModel.create(req.body);
//   // console.log(ToDo);
//   // //add to db
//   // res.status(201).json({"mesage":"TODO created"})
// });

// // READ/ GET SINGLE TODO
// app.get("/api/v1/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     //fetch data from db
//     const Todo = await TodoModel.findById(id);
//     if (!Todo) {
//       res.status(404).json("Not Found");
//     }
//     res.status(200).json({ message: Todo });
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }

//   // const {id} = req.params;
//   // // fetch data from db
//   // res.status(201).json({message: "TODO fetched"});
// });

// // UPDATE/ PATCH
// app.patch("/api/v1/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updateddata = req.body;
//     const updatetodo = await TodoModel.findByIdAndUpdate(id,updateddata);
//     if (!updatetodo) {
//         res.status(404).json({ message: "Not Found" });
//     }
//     //update field for todo with given id
//     console.log(updateddata);
//     res.patch(200).json({ message: updateddata });
//   } catch (error) {
//     res.status(500).json({message:error});
//   }
// });

// // DELETE/ delete TODO
// app.delete("/api/v1/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     //delete the todo in db for given id
//     const deletedTodo = await TodoModel.findByIdAndDelete(id);
//     if (!deletedTodo) {
//       res.status(404).json({ message: "Not Found" });
//     }
//     console.log(result);

//     res.status(200).json({ message: "TODO deleted" });
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }

//   // const {id} = req.params;
//   // //delete the todo in db for given id
//   // const result = TodoModel.findByIdAndDelete(id);
//   // res.status(200).json({message: "TODO deleted"});
// });

// // GET ALL TODOS
// app.get("/api/v1/todos", async (req, res) => {
//   try {
//     //get all the todos from DB
//     const todos = await TodoModel.find({});
//     res.status(200).json({ message: todos });
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }
// });
