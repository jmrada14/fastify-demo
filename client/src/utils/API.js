import axios from "axios";

export default {
    // Gets all books
    getTodos: function () {
        return axios.get("http://localhost:3001/api/todos");
    }

}
