import React from 'react'
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsClockFill } from "react-icons/bs";

const Section5 = () => {
    return (
        <div id='section5'>
            <section>
                <aside>
                    <div>
                        <img src="https://www.villagedentaldtc.com/wp-content/uploads/2021/09/waiting-room-chairs-village-dental-1.jpg" alt="" />
                        <img src="https://www.villagedentaldtc.com/wp-content/uploads/2021/08/exam-room-village-dental.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://www.villagedentaldtc.com/wp-content/uploads/2021/08/blue-waiting-room-chairs-village-dental-test.jpg" alt="" />
                        <img src="https://www.villagedentaldtc.com/wp-content/uploads/2021/08/neon-sign-village-dental-test.jpg" alt="" />
                    </div>
                </aside>
                <main>
                    <h1>Visit Us</h1>
                    <p>We’re conveniently located in the Denver Tech Center area. Find us on the 4th floor of the Triad Office Park building. Plenty of free parking available.</p>
                    <p><FaMapMarkedAlt /> 5670 Greenwood Plaza Blvd., Suite 404 Greenwood Village, CO 80111</p>
                    <a href=""> <b>Get Directions</b></a>
                    <p><BsClockFill />Monday–Thursday: 7AM–3PM</p>
                </main>
            </section>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2043.533078718811!2d-104.90110560128991!3d39.61248142752206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c86f3c5956bbd%3A0x8f93d51ed9708f43!2s5670%20Greenwood%20Plaza%20Blvd%20UNIT%20404%2C%20Greenwood%20Village%2C%20CO%2080111%2C%20USA!5e0!3m2!1sen!2sin!4v1674332441298!5m2!1sen!2sin" width="80%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </div>
    )
}

export default Section5