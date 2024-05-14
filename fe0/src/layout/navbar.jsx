import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
import { BasketContext } from '../context/basketProvider'
function Navbar() {
    const {basket} = useContext(BasketContext)
  return (
    <div>
        <nav>
            <ul className='navbar'>
<li><Link to={"/"}>Home</Link></li>
<li><Link to={"/admin"}>Admin</Link></li>
<li><Link to={"/basket"}>Basket{basket.length}</Link></li>
<li><Link to={"/add"}>Add</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar