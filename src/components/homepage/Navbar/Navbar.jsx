import React from 'react'
import { Link } from 'react-router-dom'
import './scss/Navbar.css'

const Navbar = () => {
    return (
        <nav className="main-navbar">
            {/* <img src="" alt="" className="logo" /> */}
            <div className="container flex2">
                <h1>Logo</h1>
                <ul className='flex2'>
                    <Link to={"/"} active>Home</Link>
                    <Link to={"/services"} active>Services</Link>
                    <Link to={"/about-us"} active>About Us</Link>
                    <Link to={"/contact-us"} active>Contact Us</Link>
                    <Link to={"/profile"} active>Profile</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar