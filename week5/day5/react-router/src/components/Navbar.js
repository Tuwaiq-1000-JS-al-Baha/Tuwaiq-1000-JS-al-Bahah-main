import { Link } from "react-router-dom"

function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
    </ul>
  )
}

export default Navbar
