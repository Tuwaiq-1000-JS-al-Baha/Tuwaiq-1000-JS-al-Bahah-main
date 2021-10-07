import React, { Component } from "react"
import { CardColumns } from "react-bootstrap"
import Meme from "./Meme"

class Memes extends Component {
  state = {
    memesData: null,
    ready: false,
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(result => {
        const memesArray = result.data.memes
        console.log(this.state.memesData)
        this.setState({ memesData: memesArray, ready: true })
      })
  }

  render() {
    const students = [
      "Ammar Alwagdany",
      "Ibtisam Alshammari",
      "ASMA ALASHWALI",
      "Ahmed ALbrak",
      "Rawan Alessa",
      "Amal Alfarraj",
      "Leen Alfouzan",
      "MARAM ALGHAMDI",
      "Sarah Alharbi",
      "Rayan Alharbi",
      "Omar Alharbi",
      "Reema Alharbi",
      "Abdulaziz Alhayyani",
      "Sara AlHejailan",
      "Afnan alhussin",
      "Fatima Alkhamis",
      "Abdulmajeed Alkhnizan",
      "Amjad Mohammad Alkhodaidi",
      "Afra allahyani",
      "Ohoud Almehmadi",
      "Raghad Almestadi",
      "Haneen Almutairi",
      "Seham Alotaibi",
      "Saja Alqahtani",
      "sarah alqefary",
      "Abdullah Alsemairi",
      "Amaal ALshammari",
      "shrouq altalhi",
      "layan alturki",
      "Maram Al-Ward",
      "Rabiah Alwathnani",
      "Nouf Al-Ziyadi",
      "Fatimah Ibrahim",
      "Sarah Jannadi",
      "Walaa Mutawalli",
      "Rahaf Almuhaini",
      "Rawan Aloufi",
      "Reem  Almuaddi",
    ]
    console.log(this.state.memesData)
    let output
    if (this.state.ready === false) {
      output = <h1>Loading..</h1>
    } else {
      output = (
        <CardColumns>
          {this.state.memesData.map(meme => (
            <Meme key={meme.id} meme={meme} />
          ))}
        </CardColumns>
      )
    }
    return <>{output}</>
  }
}

export default Memes
