const bodyParser = require("body-parser");
const express =require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const dbconnect = require("./Config/database.js");
const routes=require("./routes/routes.js")
// adding middlewares
app.use(bodyParser.json());

//creating routes
app.use(routes);
// // Function to get all Todos
// app.get("/todos", (req, res) => {
   
// });

// //Function to get specific Todo 
// app.get("/todos/:id", (req, res) => {
//    
// });

// //Function to create a new Todo
// app.post("/todos", (req, res) => {
   
// });

// //Function to update a specific Todo
// app.put("/todos/:id", (req, res) => {
//     const {id}=req.params;
//     const {title, description} = req.body;
//     const todo = todos.find(todo => todo.id === parseInt(id));
//     if(!todo){
//         res.status(404).json({
//             status: "NOT FOUND",
//             message: "Todo not found"
//         })
//     }
//     todo.title = title;
//     todo.description = description;
//     res.status(200).json({
//         status: "OK",
//         data: todo
//     })
// });

// //Function to delete a specific Todo
// app.delete("/todos/:id", (req, res) => {
//     const {id}=req.params;
//     const todo = todos.find(todo => todo.id === parseInt(id));
//     if(!todo){
//         res.status(404).json({
//             status: "NOT FOUND",
//             message: "Todo not found"
//         })
//     }
//     const index = todos.indexOf(todo);
//     todos.splice(index, 1);
//     res.status(200).json({
//         status: "OK",
//         data: todo
//     })
// });

//Connecting to the database
dbconnect();


//Starting the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});