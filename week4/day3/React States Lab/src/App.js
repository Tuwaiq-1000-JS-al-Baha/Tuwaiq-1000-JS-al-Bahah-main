import React, { Component } from "react"
import "./App.css"
import Students from "./components/Students"

class App extends Component {
  render() {
    return (
      <div>
        <h1>hello from app</h1>
        <Students />
      </div>
    )
  }
}

export default App
