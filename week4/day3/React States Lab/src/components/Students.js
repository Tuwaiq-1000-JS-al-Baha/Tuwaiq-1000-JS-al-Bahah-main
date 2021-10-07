import React, { Component } from "react"
import Student from "./Student"

class Students extends Component {
  students = [
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

  render() {
    const students = this.students.map(student => <Student key={student} studentName={student} />)
    return <ul>{students}</ul>
  }
}

export default Students
