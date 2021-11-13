import ProductGroup from "../components/ProductGroup"

function Home(props) {
  const { products } = props
  return (
    <>
      <h1>Products</h1>
      <ProductGroup products={products} />
    </>
  )
}

export default Home
