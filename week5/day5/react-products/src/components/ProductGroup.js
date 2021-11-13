import { Row } from "react-bootstrap"
import ProductItem from "./ProductItem"

function ProductGroup(props) {
  const { products } = props
  return (
    <Row xs={2} md={4} className="g-4">
      {products.map(product => (
        <ProductItem product={product} />
      ))}
    </Row>
  )
}

export default ProductGroup
