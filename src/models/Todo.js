// DEPENDENCIES
const mongoose = require("mongoose");
// CONFIG
const Schema = mongoose.Schema

//SCHEMA
const todo = new Schema({
    title: String,
    author: String,
    text: String,
    date: Date,
    priority: Number
});

const Todo = mongoose.model("Car", todo);
// EXPORT
module.exports = Todo;
