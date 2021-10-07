import { Component } from "react"

class Counter extends Component {
  state = {
    number: 0,
  }

  handleIncrement = () => {
    this.setState({ number: this.state.number + 1 })
  }

  handleDecrement = () => {
    if (this.state.number > 0) {
      this.setState({ number: this.state.number - 1 })
    }
  }

  render() {
    let number = this.state.number
    if (number === 0) {
      number = "zero"
    }
    console.log(this.state.number)
    return (
      <>
        <label htmlFor="btn-add" className="form-label">
          counter:
          <span style={{ fontSize: 20 }} className="badge bg-warning mx-5 text-lg">
            {number}
          </span>
        </label>
        <button className="btn btn-primary" id="btn-add" onClick={this.handleIncrement}>
          INCREMENT
        </button>
        <button className="btn btn-danger mx-1" id="btn-dec" onClick={this.handleDecrement}>
          DECREMENT
        </button>
      </>
    )
  }
}

export default Counter
