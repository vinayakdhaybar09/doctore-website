import React from 'react'
import Accordian from '../components/Accordian'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
import Section6 from '../components/Section6'
import Section7 from '../components/Section7'

const Services = () => {
    return (
        <div id='services'>
            <Navbar />
            <Accordian />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Footer />
        </div>
    )
}

export default Services