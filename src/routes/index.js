// CONTROLLER
const todoController = require("../controllers/todoController");

const routes = [
    {
    method: 'GET',
        url: '/api/todos',
        handler: todoController.getTodos
},
    {
        method: 'GET',
        url: '/api/todos/:author',
        handler: todoController.getTodoByAuthor
    },
    {
        method: 'POST',
        url: '/api/todos',
        handler: todoController.addTodo
    },
    {
        method: 'PUT',
        url: '/api/todos/:id',
        handler: todoController.updateTodo
    },
    {
        method: 'DELETE',
        url: '/api/todos/:id',
        handler: todoController.deleteTodo
    }
];

module.exports = routes;
