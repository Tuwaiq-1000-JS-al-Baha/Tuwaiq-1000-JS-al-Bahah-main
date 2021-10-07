import React, { Component } from "react"
import FoodInput from "./components/FoodInput"
import FoodList from "./components/FoodList"

class App extends Component {
  state = {
    foodList: ["banana", "apple", "pineapple", "peach", "avocado"],
    filterValue: "",
    filteredFoodList: ["banana", "apple", "pineapple", "peach", "avocado"]
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState((prevState) => {
      const filteredFoodList = prevState.foodList.filter((food) => {
        return food.includes(value)
      })
      console.log(filteredFoodList)
      return { filterValue: value, filteredFoodList: filteredFoodList }
    })
  }

  render() {
    return (
      <>
        <FoodInput
          value={this.state.filterValue}
          handleChange={this.handleChange}
        />
        <FoodList foodList={this.state.filteredFoodList} />
      </>
    )
  }
}

export default App
