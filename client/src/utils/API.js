import axios from "axios";

export default {
    // Gets all books
    getTodos: function () {
        return axios.get("http://localhost:3001/api/todos");
    },
    saveTodo: function (data) {
        return axios.post("http://localhost:3001/api/todos", data)
    },
    deleteTodo: function(id) {
        return axios.delete("/api/todos/" + id);
    },

}
