import React, { Component } from "react"

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

  render() {
    //console.log("list:", this.state.list)

    // const listElements = this.state.list.map(element => <li key={element}>{element}</li>)

    const listElements = []
    this.state.list.forEach(element => {
      const li = <li key={element}>{element}</li>
      listElements.push(li)
    })

    return (
      <>
        <h1>Todo list</h1>
        <input type="text" onChange={this.handleInputChange} />
        <button onClick={this.handleAdd}>Add</button>
        <ul>{listElements}</ul>
      </>
    )
  }
}

export default TodoList
