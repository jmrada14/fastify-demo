import React, { Component } from "react";
import "./style.css";

class Form extends Component {
    // Setting the component's initial state
    state = {
        title: "",
        author: "",
        description: "",
        date: "",
        priority: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        if (name === "priority") {
            value = value.substring(0, 15);
        }
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (!this.state.title || !this.state.description || !this.state.author) {
            alert("Fill out title, author and description please!");
        } else if (this.state.priority.length > 4) {
            alert(
                `Priority values: 1 - 2 or 3 ${this.state.title} ${this.state
                    .description}`
            );
        } else {
            alert(`Hello ${this.state.title} ${this.state.description}`);
        }

        this.setState({
            title: "",
            author: "",
            description: "",
            date: "",
            priority: ""
        });
    };

    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div>
                <p>
                    {this.state.title} {this.state.author} {this.state.description} {this.state.date} {this.state.priority}
                </p>
                <form className="form">
                    <input
                        value={this.state.title}
                        name="title"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Title"
                    />
                    <input
                        value={this.state.author}
                        name="author"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Author"
                    />
                    <input
                        value={this.state.description}
                        name="description"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="TODO Description"
                    />
                    <input
                        value={this.state.date}
                        name="date"
                        onChange={this.handleInputChange}
                        type="date"
                        placeholder="Date"
                    />
                    <input
                        value={this.state.priority}
                        name="priority"
                        onChange={this.handleInputChange}
                        type="number"
                        placeholder="Priority"
                    />
                    <button onClick={this.handleFormSubmit} className="btn btn-danger">Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
