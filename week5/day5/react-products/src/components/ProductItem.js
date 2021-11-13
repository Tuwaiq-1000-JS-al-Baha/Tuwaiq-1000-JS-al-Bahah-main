import { Col, Card } from "react-bootstrap"

function ProductItem(props) {
  const { product } = props
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>Price: {product.price} SAR</Card.Text>
          <Card.Text>Quantity: {product.quantity}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ProductItem
