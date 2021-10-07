import React, { Component } from "react"

class Counter extends Component {
  state = {
    counter: 0,
    a: 1,
    b: 2
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  styles = {
    textAlign: "center"
  }

  render() {
    return (
      <div
        style={{ height: "100vh" }}
        className="d-flex flex-column justify-content-around align-items-center"
      >
        <h2>counter:</h2>
        <div
          style={{ fontSize: 30 }}
          className="badge badge-secondary align-middle"
        >
          {this.state.counter}
        </div>
        <div style={this.styles}>
          <button className="btn btn-primary mr-3" onClick={this.increment}>
            increment
          </button>
          <button className="btn btn-danger" onClick={this.decrement}>
            decrement
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
