import React, { Component } from "react"

class TodoItem extends Component {
  handleDeleteItem = () => {
    this.props.handleDeleteItem(this.props.item)
  }

  render() {
    return (
      <div className="list-group-item  d-flex justify-content-between align-items-center">
        <span>{this.props.item}</span>
        <button onClick={this.handleDeleteItem} className="btn btn-danger">
          Delete
        </button>
      </div>
    )
  }
}

export default TodoItem
