import React from 'react'
import infovid from "../assets/infovid.mp4";
import sec1 from "../assets/sec1.jpg";

const Section1 = ({ subHead, head, video }) => {
    return (
        <div id='section1'>

            <div>
                <h3>{subHead}</h3>
                <h1>{head}</h1>
                <a href="">
                    <button>BOOK ONLINE</button>
                </a>
                <h3>OR CALL (303) 220-7662</h3>
            </div>
            {
                video === 'true' ?
                    <video autoPlay loop playsInline muted preload='none' src={infovid} width="100%" height="100%" controls={false} />
                    :
                    <main></main>

            }
        </div>
    )
}

export default Section1