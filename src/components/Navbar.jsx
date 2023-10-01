import React from 'react'
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div id='navbar'>
        <a href="/">
            <img src={logo} alt="..." />
        </a>
        <div>
            <a href="/">HOME</a>
            <a href="/about">ABOUT</a>
            <a href="/services">SERVICES</a>
            <a href="/bookings">
                <button>BOOK ONLINE</button>
            </a>
        </div>
    </div>
  )
}

export default Navbar