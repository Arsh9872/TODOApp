const express = require("express");
const connecDb = require("./db/connect");
// const connecDB = require("./db/connect");
require("dotenv").config();
const TodoModel = require("./model/ToDo.js");

const PORT =5000;

const app = express();
//middleware
app.use(express.json());

const start = async () => {    //async = code/DB is time taking

    try {
        // await connecDb("mongodb://localhost:27017/tododb");   // method 1
        await connecDb(process.env.DB_URL);
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



// CREATE/POST
app.post("/api/v1/todos",(req,res)=>{
    // error handling for validations
    try {
        const ToDo = TodoModel.create(req.body);
        if(!ToDo){
            res.status(404).json({message:"Coudn't create"});
        }
        // add to db
        res.status(201).json({message: ToDo});
    }
     catch (error) {
        res.status(500).json({message:error});
        
    }

    // const data = req.body;
    // const ToDo = TodoModel.create(req.body);
    // console.log(ToDo);
    // //add to db
    // res.status(201).json({"mesage":"TODO created"})
});


// READ/ GET SINGLE TODO
app.get("/api/v1/todos/:id",async(req,res)=>{

    try {
        const {id} = req.params;
        //fetch data from db
        const Todo = await TodoModel.findById(id);
        if(!Todo){
            res.status(404).json("Not Found");
        }
        res.status(200).json({message: Todo});
    } catch (error) {
        res.status(500).json({message:error});
    }

    // const {id} = req.params;
    // // fetch data from db
    // res.status(201).json({message: "TODO fetched"});
});

// UPDATE/ PATCH
app.patch("/api/v1/todos/:id",(req,res)=>{
    const{id} = req.params;
    const data = req.body;
    //update field for todo with given id
    res.patch(200).json({message: "TODO updated"})
});

// DELETE/ delete TODO
app.delete("/api/v1/todos/:id",(req,res)=>{

    try {
        const {id} = req.params; 
    //delete the todo in db for given id
    const result = TodoModel.findByIdAndDelete(id);
    console.log(result);
    
    res.status(200).json({message: "TODO deleted"});
        
    } catch (error) {
        res.status(500).json({message:error});
    }

    // const {id} = req.params; 
    // //delete the todo in db for given id
    // const result = TodoModel.findByIdAndDelete(id);
    // res.status(200).json({message: "TODO deleted"});
});

// GET ALL TODOS
app.get("/api/v1/todos",(req,res)=>{
    //get all the todos from DB
    res.status(200).json({message: "TODO fetched"});
});


