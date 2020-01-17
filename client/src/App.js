import React from "react";
import API from "./utils/API";
import Nav from "./components/Nav";
import Form from "./components/Form";
import { List, ListItem } from "./components/List";
class App extends React.Component{
    state = {
        todos: [],
        title: "",
        author: "",
        text: "",
        date: "",
        priority: ""
    };
    componentDidMount() {
        this.loadTodos();
    }
    loadTodos = () => {
        API.getTodos()
            .then(res =>
                this.setState({todos: res.data, title: res.data[0].title})
            )
            .catch(err => console.log(err));
    };

  render() {
      return (
          <div>
              <Nav/>
              <div className="container">
                  <Form/>
                  <List>
                      <ListItem>
                          <List>
                              {this.state.todos.map(todo => (
                                  <ListItem key={todo._id}>
                                          <strong>
                                              Title: {todo.title} <br/>
                                              Author: {todo.author} <br/>
                                              To-do Description: {todo.text}<br/>
                                              Date: {todo.date}<br/>
                                              Priority: {todo.priority}
                                          </strong>
                                  </ListItem>
                              ))}
                          </List>
                      </ListItem>
                  </List>
              </div>
          </div>

      )
  }
};

export default App
