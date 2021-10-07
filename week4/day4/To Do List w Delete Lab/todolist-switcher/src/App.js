import React, { Component } from "react"
import "./App.css"
import TodoList from "./components/TodoList"
import Counter from "./components/Counter"

class App extends Component {
  state = {
    showTodoList: true,
    showCounter: true,
  }

  handleHideTodolist = () => {
    if (this.state.showTodoList === true) {
      this.setState({ showTodoList: false })
    } else {
      this.setState({ showTodoList: true })
    }
  }

  handleHideCounter = () => {
    if (this.state.showCounter === true) {
      this.setState({ showCounter: false })
    } else {
      this.setState({ showCounter: true })
    }
  }

  render() {
    let todolist = null
    if (this.state.showTodoList === true) {
      todolist = <TodoList />
    }
    let counter = null
    if (this.state.showCounter === true) {
      counter = <Counter />
    }
    return (
      <div>
        {counter}
        {todolist}
        <button onClick={this.handleHideTodolist}>Show / Hide todo list</button>
        <button onClick={this.handleHideCounter}>Show / Hide counter</button>
      </div>
    )
  }
}

export default App
