import { Button, ListGroup } from "react-bootstrap"

function TaskItem(props) {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center mb-2">
      <div>{props.item}</div>
      <div>
        <Button className="mx-2" variant="danger" id={props.item} onClick={props.removeTask}>
          Remove
        </Button>
        <Button variant="info" id={props.index} onClick={props.editTask}>
          Edit
        </Button>
      </div>
    </ListGroup.Item>
  )
}

export default TaskItem
