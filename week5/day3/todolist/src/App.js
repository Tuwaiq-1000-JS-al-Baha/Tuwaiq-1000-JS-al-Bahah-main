import { useState } from "react"
import TaskAdd from "./components/TaskAdd"
import TaskInput from "./components/TaskInput"
import TaskItem from "./components/TaskItem"
import { ListGroup } from "react-bootstrap"
import Carousel from "./components/Carousel"
import "./App.css"

function App() {
  const [text, setText] = useState("")
  const [list, setList] = useState([])
  const [editIndex, setEditIndex] = useState(null)
  const [editValue, setEditValue] = useState("")

  const addTask = () => {
    if (text != "") {
      setList([...list, text])
      setText("")
    }
  }

  const removeTask = e => {
    // const index = e.target.id
    // const newList = [...list]
    // newList.splice(index, 1)
    // setList(newList)
    const itemToRemove = e.target.id
    setList(list.filter(item => item !== itemToRemove))
  }

  const editTask = e => {
    const index = e.target.id
    setEditIndex(index)
    setEditValue(list[index])
  }

  const confirmEdit = () => {
    const newList = [...list]
    newList[editIndex] = editValue
    setList(newList)
    setEditIndex(null)
    setEditValue("")
  }

  console.log("list:", list)
  console.log("edit index:", editIndex)
  console.log("edit value:", editValue)
  console.log("-----------")

  return (
    <>
      <h1>Todo list</h1>
      <TaskAdd text={text} setText={setText} addTask={addTask} />

      <ListGroup>
        {list.map((item, index) => {
          if (index == editIndex) {
            return <TaskInput key={index} item={item} setEditValue={setEditValue} confirmEdit={confirmEdit} />
          } else {
            return <TaskItem key={index} item={item} index={index} removeTask={removeTask} editTask={editTask} />
          }
        })}
      </ListGroup>
      <Carousel />
    </>
  )
}

export default App
