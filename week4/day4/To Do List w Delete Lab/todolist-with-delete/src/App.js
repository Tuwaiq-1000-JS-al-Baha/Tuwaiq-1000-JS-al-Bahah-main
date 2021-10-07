import React, { Component } from "react"
import "./App.css"
import TodoList from "./components/TodoList"

class App extends Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    )
  }
}

export default App
