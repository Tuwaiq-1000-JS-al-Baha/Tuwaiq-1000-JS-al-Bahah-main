import React, { Component } from "react"

class FoodInput extends Component {
  render() {
    return (
      <>
        <label htmlFor="fruit">search here:</label>
        <input
          type="text"
          id="fruit"
          value={this.props.value}
          onChange={this.props.handleChange}
        />
      </>
    )
  }
}

export default FoodInput
