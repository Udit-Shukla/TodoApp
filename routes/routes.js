// Routes for all the controllers 
const express=require("express");
const router= express.Router();

const {CreateTodo,GetTodos,GetTodo,UpdateTodo,DeleteTodo}=require("../Controllers/Todos");

// Defining routes
router.get("/", (req, res) => {
    res.send("This is the landing page for Todo App");
});
router.get("/todos", GetTodos);
router.get("/todos/:id", GetTodo);
router.post("/todos", CreateTodo);
router.put("/todos/:id", UpdateTodo);
router.delete("/todos/:id", DeleteTodo);

module.exports=router;