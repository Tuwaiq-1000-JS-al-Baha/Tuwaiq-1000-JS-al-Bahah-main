import { Button, Col, Form, Row } from "react-bootstrap"

function TaskAdd(props) {
  return (
    <Form className="mb-3">
      <Row>
        <Col>
          <Form.Label>Enter your task:</Form.Label>
        </Col>
        <Col>
          <Form.Control type="text" value={props.text} onChange={e => props.setText(e.target.value)} />
        </Col>
        <Col>
          <Button variant="primary" onClick={props.addTask}>
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default TaskAdd
