import React, { Component } from "react"
import TodoItem from "./TodoItem"

class TodoList extends Component {
  state = {
    list: [],
    inputText: "",
  }

  handleAdd = () => {
    this.setState(oldState => {
      const newList = [...oldState.list, oldState.inputText]

      return { list: newList }
    })
  }

  handleInputChange = e => {
    const value = e.target.value
    this.setState({ inputText: value })
  }

  handleDeleteItem = toDeleteItem => {
    console.log("you wnat to delete", toDeleteItem)
    this.setState(oldState => {
      const newList = oldState.list.filter(item => item !== toDeleteItem)

      return { list: newList }
    })
  }

  render() {
    const listElements = this.state.list.map(element => (
      <TodoItem key={element} item={element} handleDeleteItem={this.handleDeleteItem} />
    ))

    return (
      <>
        <h1>Todo list</h1>
        <input type="text" onChange={this.handleInputChange} />
        <button onClick={this.handleAdd} className="btn btn-primary">
          Add
        </button>
        <ul className="list-group">{listElements}</ul>
      </>
    )
  }
}

export default TodoList
