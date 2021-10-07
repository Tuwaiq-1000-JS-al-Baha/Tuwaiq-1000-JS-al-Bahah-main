import React, { Component } from "react"
import "./App.css"
import NavBar from "./components/NavBar"
import Memes from "./components/Memes"

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Memes />
      </div>
    )
  }
}

export default App
