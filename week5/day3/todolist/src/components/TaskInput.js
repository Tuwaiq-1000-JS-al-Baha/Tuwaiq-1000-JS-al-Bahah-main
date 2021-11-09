import { Button, ListGroup, Form } from "react-bootstrap"

function TaskInput(props) {
  return (
    <ListGroup.Item className="d-flex justify-content-between gap-3">
      <Form.Control type="text" defaultValue={props.item} onChange={e => props.setEditValue(e.target.value)} />
      <Button variant="success" onClick={props.confirmEdit}>
        Confirm
      </Button>
    </ListGroup.Item>
  )
}

export default TaskInput
