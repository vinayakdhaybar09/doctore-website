import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <div id='footer'>
            <div>
                <h2>Social</h2>
                <a href=""><BsInstagram /></a>
                <a href=""><FaFacebookF /></a>
            </div>
            <div>
                <h2>Services</h2>
                <a href=""><p>General</p></a>
                <a href=""><p>Cosmetic</p></a>
                <a href=""><p>Surgical</p></a>
            </div>
            <div>
                <h2>Slots</h2>
                <a href="">
                    <button>BOOK ONLINE</button>
                </a>
            </div>
            <div>
                <h2>Contact Us</h2>
                <a href=""><p>5670 Greenwood Plaza Blvd Suite 404, Greenwood Village, CO 80111</p></a>
                <p>1234567890</p>
                <a href=""><p>info@dental.com</p></a>
            </div>

        </div>
    )
}

export default Footer