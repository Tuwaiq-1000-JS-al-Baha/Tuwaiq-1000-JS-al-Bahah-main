import { Form, Col, Row, Button } from "react-bootstrap"

function AddProduct(props) {
  const { addProduct } = props

  return (
    <div className="ms-4 mt-4">
      <h1>Add product</h1>
      <Form className="mt-5" onSubmit={addProduct}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Title
          </Form.Label>
          <Col md="6">
            <Form.Control name="title" type="text" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Description
          </Form.Label>
          <Col md="6">
            <Form.Control as="textarea" name="description" rows={3} required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Quantity
          </Form.Label>
          <Col md="6">
            <Form.Control type="number" name="quantity" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Category
          </Form.Label>
          <Col md="6">
            <Form.Select aria-label="Default select example" name="category">
              <option>food</option>
              <option>clothes</option>
              <option>tools</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Price
          </Form.Label>
          <Col md="6">
            <Form.Control type="number" name="price" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Image
          </Form.Label>
          <Col md="6">
            <Form.Control type="url" name="image" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Owner
          </Form.Label>
          <Col md="6">
            <Form.Control type="text" name="owner" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="my-5">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit">Add Product</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddProduct
