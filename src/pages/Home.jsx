import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
import Section6 from '../components/Section6'
import Section7 from '../components/Section7'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Section1 subHead='TRUSTED DENVER TECH CENTER DENTISTS' head='Exceptional care for all ages' video={'true'} />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer/>
    </div>
  )
}

export default Home