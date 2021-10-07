import React, { Component } from "react"

class FoodList extends Component {
  render() {
    const foodListElements = this.props.foodList.map((food, index) => {
      return <li key={index}>{food}</li>
    })

    return <ul>{foodListElements}</ul>
  }
}

export default FoodList
