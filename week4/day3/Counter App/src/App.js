import React, { Component } from "react"
import "./styles.css"
import Counter from "./components/Counter"

class App extends Component {
  render() {
    return (
      <div className="container">
        <Counter />
      </div>
    )
  }
}

export default App
