import axios from "axios"
import { useEffect, useState } from "react"
import AddProduct from "./pages/AddProduct"
import Navbar from "./components/Navbar"
import { Routes, Route, useNavigate } from "react-router-dom"
import Home from "./pages/Home"

function App() {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  const getProducts = () => {
    axios.get("https://vast-chamber-06347.herokuapp.com/api/products").then(response => {
      const productsData = response.data
      setProducts(productsData)
    })
  }

  useEffect(() => {
    getProducts()
  }, [])

  const addProduct = e => {
    e.preventDefault()
    const form = e.target
    const productBody = {
      title: form.elements.title.value,
      description: form.elements.description.value,
      quantity: form.elements.quantity.value,
      price: form.elements.price.value,
      category: form.elements.category.value,
      image: form.elements.image.value,
      owner: form.elements.owner.value,
    }
    axios
      .post("https://vast-chamber-06347.herokuapp.com/api/products", productBody)
      .then(response => {
        console.log("you have added a product")
        getProducts()
        navigate("/")
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/add-product" element={<AddProduct addProduct={addProduct} />} />
      </Routes>
    </>
  )
}

export default App
