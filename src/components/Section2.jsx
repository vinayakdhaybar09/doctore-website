import React from 'react'
import sec2 from "../assets/sec2.jpg";

const Section2 = () => {
    return (
        <div id='section2'>
            <div className='container'>
                <main>
                    <h1>Dentistry Done Right</h1>
                    <p>Adults and kids, we welcome patients of all ages! Our team is passionate about building lifetime relationships through positive experiences, featuring:</p>
                    <section>
                        <p><span>✔</span> Transparent Pricing</p>
                        <p><span>✔</span> Unparalleled Warranty</p>
                        <p><span>✔</span> FREE Whitening (for life!)</p>
                    </section>
                    <div>
                        <i>“Our word is our worth. We promise to do it right, timely, and for a fair price.”</i>
                    </div>
                </main>
                <div>
                    <img src={sec2} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Section2