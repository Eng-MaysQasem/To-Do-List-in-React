import React, { Component } from "react";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      newTask: "",
    };
  }

  handleChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.newTask);
    this.setState({ newTask: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a new task"
          value={this.state.newTask}
          onChange={this.handleChange}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AddTodo;