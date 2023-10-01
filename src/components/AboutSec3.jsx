import React from 'react'
import { FaTooth } from "react-icons/fa";

const AboutSec3 = ({ profileImg, name, info, edu1, edu2, edu3, edu4 }) => {
    return (
        <div id='aboutsec3'>
            <img src={profileImg} alt="" />
            <aside>
                <div>
                    <FaTooth />
                    <h2>{name}</h2>
                    <b>Why dentistry?</b>
                    <p>{info}</p>
                </div>
                <div>
                    <b>Education</b>
                    <ul>
                        <li>{edu1}</li>
                        <li>{edu2}</li>
                        <li>{edu3}</li>
                        <li>{edu4}</li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default AboutSec3