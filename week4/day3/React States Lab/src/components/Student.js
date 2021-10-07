import React, { Component } from "react"

class Student extends Component {
  state = {
    textColor: "black",
    message: "",
  }

  handleClick = () => {
    this.setState({ textColor: "red", message: `I am the mighty ${this.props.studentName}, How dare you touch me!!?` })
  }

  handleDoubleClick = () => {
    this.setState({ textColor: "green", message: "STOP IT!" })
    setTimeout(() => {
      this.setState({ textColor: "black", message: "" })
    }, 1000)
  }

  handleRightClick = () => {
    this.setState({ textColor: "blue", message: "Stop. Poking. Around!!" })
  }

  render() {
    return (
      <>
        <li
          onContextMenu={this.handleRightClick}
          style={{ color: this.state.textColor }}
          onDoubleClick={this.handleDoubleClick}
          onClick={this.handleClick}
        >
          {this.props.studentName}
        </li>
        <p>{this.state.message}</p>
      </>
    )
  }
}

export default Student
