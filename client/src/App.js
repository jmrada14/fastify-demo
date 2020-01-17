import React from "react";
import API from "./utils/API";
import Nav from "./components/Nav";
import { Input, TextArea, FormBtn } from "./components/Form";
import { List, ListItem } from "./components/List";
import DeleteBtn from "./components/deleteBtn";
class App extends React.Component{
    state = {
        todos: [],
        title: "",
        author: "",
        text: "",
        date: "",
        priority: ""
    };
    handleInputChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
            API.saveTodo({
                title: this.state.title,
                author: this.state.author,
                text: this.state.text,
                date: this.state.date,
                priority: this.state.priority
            })
                .then(res => this.loadTodos())
                .catch(err => console.log(err));
        }
    };

    componentDidMount() {
        this.loadTodos();
    }
    loadTodos = () => {
        API.getTodos()
            .then(res =>
                this.setState({todos: res.data, title: "", author: "", text: "", date: "", priority: "" })
            )
            .catch(err => console.log(err));
    };

    deleteTodo = id => {
        API.deleteTodo(id)
            .then(res => this.loadTodos())
            .catch(err => console.log(err));
    };

  render() {
      return (
          <div>
              <Nav/><br/>
              <div className="container">
                  <form>
                      <Input
                          value={this.state.title}
                          onChange={this.handleInputChange}
                          name="title"
                          placeholder="Title"
                      />
                      <p>{this.state.title}</p>
                      <Input
                          value={this.state.author}
                          onChange={this.handleInputChange}
                          name="author"
                          placeholder="Author"
                      />
                      <p>{this.state.author}</p>
                      <TextArea
                          value={this.state.text}
                          onChange={this.handleInputChange}
                          name="text"
                          placeholder="To-do description"
                      />
                      <p>{this.state.text}</p>
                      <Input
                          type="date"
                          value={this.state.date}
                          onChange={this.handleInputChange}
                          name="date"
                          placeholder="Date"
                      />
                      <p>{this.state.date}</p>
                      <Input
                          type="number"
                          value={this.state.priority}
                          onChange={this.handleInputChange}
                          name="priority"
                          placeholder="Priority"
                      />
                      <p>{this.state.priority}</p>
                      <FormBtn
                          disabled={!(this.state.author && this.state.title)}
                          onClick={this.handleFormSubmit}
                      >
                          Submit
                      </FormBtn>
                  </form>
                  <br/><br/>
<div>
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
                                      <br/>
                                      <DeleteBtn  onClick={() => this.deleteTodo(todo._id)}/>
                                  </ListItem>
                              ))}
                          </List>
</div>
              </div>
          </div>

      )
  }
};

export default App
