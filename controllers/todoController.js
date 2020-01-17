// DEPENDENCIES
const boom = require("boom");

// DB
const Todo = require("../models/Todo");

// GET ALL TODOS
exports.getTodos = async (req, res) => {
try {
    const todos = await Todo.find()
    return todos
}catch (err) {
    throw boom.boomify(err);
}
};

//GET TODO BY AUTHOR

exports.getTodoByAuthor = async (req, res) => {
  try{
      const author = req.params.author;
      const todo = await Todo.find({author: author})
      return todo
  }catch (err) {
      throw boom.boomify(err)
  }
};

// ADD NEW TODO

exports.addTodo = async (req, res) => {
  try {
   const todo = new Todo(req.body)
   return todo.save()
  }catch (err) {
      throw boom.boomify(err);
  }
};

// UPDATE TODO

exports.updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = req.body;
        const { ...updateData } = todo
        const update = await Todo.findByIdAndUpdate(id, updateData,{ new: true })
        return update
    }catch (err) {
        throw boom.boomify(err);
    }
};

exports.deleteTodo = async (req, res) => {
  try{
      const id = req.params.id;
      const todo = await Todo.findByIdAndRemove(id);
      return todo
  }catch (err) {
      boom.boomify(err);
  }
};
