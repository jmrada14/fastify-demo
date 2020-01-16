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
      const todo = await Todo.findById(author)

  }catch (err) {
      throw boom.boomify(err)
  }
};
