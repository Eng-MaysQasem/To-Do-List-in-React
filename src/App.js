import React, { Component } from "react";
import "./App.css";
import TodoCount from "./componnants/TodoCount";
import TodoList from "./componnants/TodoList.jsx";
import AddTodo from "./componnants/AddTodo.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: ["Task 1", "Task 2", "Task 3", "Task 4"],
    };
  }

  addTodo = (newTask) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTask],//عشان لما اضيف يضب ع الترتيب ما يخرب الديزاين
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>ToDo Task</h1>
        <TodoCount count={this.state.todos.length} />
        <TodoList todos={this.state.todos} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;

