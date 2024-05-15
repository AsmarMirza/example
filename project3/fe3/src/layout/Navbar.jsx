import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <div>
    <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/admin"}>Admin</Link></li>
        <li><Link to={"/add"}>Add</Link></li>
        <li><Link to={"/basket"}>Basket</Link></li>
    </ul>
   </div>
  )
}

export default Navbar