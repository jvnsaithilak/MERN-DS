import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div>
        <nav>
            <ul className='navbar'>
                <li className="list">
                    <Link to="/" className="link">Home</Link>
                </li>
                <li className="list">
                    <Link to="/About" className="link">About</Link>
                </li>
                <li className="list">
                    <Link to="/Contact" className="link">Contact</Link>
                </li>
                <li className="list">
                    <Link to="/Service" className="link">Service</Link>
                </li>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Navbar
