const todos = require("../Models/Todos")
//Controller for creating a new Todo
exports.CreateTodo = async (req, res) => {
    const {title, description} = req.body;
    const todo = {
        title,
        description
    }
    console.log(todos.length)
    todos.create(todo);
    res.status(201).json({
        status: "CREATED",
        data: todo
    })
};

//Controller for getting all Todos
exports.GetTodos = async (req, res) => {
    const todo = await todos.find();
    res.status(200).json({
    status: "OK",
    data: todo
})};

//Controller for getting a specific Todo
exports.GetTodo = async (req, res) => {
    const {title}=req.params;
        const todo = await todos.findOne({title: title});
       console.log(todo)
        res.status(200).json({
            status: "OK",
            data: todo
        })
};

//Controller for updating a specific Todo
exports.UpdateTodo = async (req, res) => {
    const {title}=req.params;
    const {newtitle, newdescription} = req.body;
    const todo = await todos.findOne({title: title});
    if(!todo){
        res.status(404).json({
            status: "NOT FOUND",
            message: "Todo not found"
        })
    }
    todo.title = newtitle;
    todo.description = newdescription;
    res.status(200).json({
        status: "OK",
        data: todo
    })
};

//Controller for deleting a specific Todo
exports.DeleteTodo = async (req, res) => {
    const {title}=req.params;
    const todo = await todos.findOne({title: title});
    if(!todo){
        res.status(404).json({
            status: "NOT FOUND",
            message: "Todo not found"
        })
    }
    const index = todos.indexOf(todo);
    todos.splice(index, 1);
    res.status(200).json({
        status: "OK",
        data: todo
    })
};

