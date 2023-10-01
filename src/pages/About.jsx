import React from 'react'
import AboutSec2 from '../components/AboutSec2'
import AboutSec3 from '../components/AboutSec3'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Section1 from '../components/Section1'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
import Section6 from '../components/Section6'
import Section7 from '../components/Section7'

const About = () => {
    return (
        <div id='about'>
            <Navbar />
            <Section1 subHead='ABOUT DENTAL' head='Building lifetime relationships through positive experiences' video={'false'} />
            <AboutSec2 />
            <AboutSec3
                profileImg={'https://www.villagedentaldtc.com/wp-content/uploads/2021/09/steve-zervas-village-dental.jpg'}
                name={'Dr. Robert Adams'}
                info={'I’m a dentist because it has always been my desire to help people in a healthcare environment. Growing up in my dad’s and uncle’s dental office, I learned early on that dentistry was going to be my path. I love the relationships we build with our patients and our ability to help them live healthier, better lives.'}
                edu1={'BA in Biology and World Religions, Westminster College'}
                edu2={'DDS, University of Oklahoma'}
                edu3={'Diplomate American Board of Dental Sleep Medicine'}
                edu4={'Diplomate Academy of Clinical Sleep Disorders Disciplines'}
            />
            <AboutSec3
                profileImg={'https://www.villagedentaldtc.com/wp-content/uploads/2021/09/brenna-mcclain-village-dental.jpg'}
                name={'Dr. Samantha Gill'}
                info={'I chose dentistry because I wanted to follow in my parents’ footsteps. Growing up in their office, I came to see how dentistry blends art and science in such a beautiful way, and how it can make a huge impact on people’s health and wellbeing. I wanted to carry on their legacy and impact my community in a positive and meaningful way.'}
                edu1={'BS in Physiology and Chemistry, University of Arizona'}
                edu2={'DDS, University of Colorado School of Dental Medicine'}
                edu3={'Fellow Academy of General Dentistry'}
                edu4={'Residency in Advanced Education in General Dentistry, USAF Scott AFB, IL'}
            />
            <AboutSec3
                profileImg={'https://www.villagedentaldtc.com/wp-content/uploads/2021/09/graham-shadwick-village-dental.jpg'}
                name={'Dr. John Krist'}
                info={'Dentistry has always been dear to me, as I was exposed to it at a very young age watching my grandfather treat patients in rural Oklahoma. Dentistry offers the unique opportunity to build lifelong relationships, while also providing a service that improves people’s quality of life. I love the art of dentistry, and even more, I love making people smile!'}
                edu1={'BA in Medical Humanities, Baylor University'}
                edu2={'DDS, University of Oklahoma'}
                edu3={'Residency in Advanced Education in General Dentistry, University of Oklahoma'}
                edu4={'Fellow Academy of General Dentistry'}
            />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Footer />

        </div>
    )
}

export default About