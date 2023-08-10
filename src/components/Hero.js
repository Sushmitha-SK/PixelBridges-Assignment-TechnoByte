import React from 'react'
import '../styles/Hero.css'
import Heading from './Heading';

const Hero = () => {

    return (
        <>
            <section className='hero'>
                <div className='container'>
                    <Heading subtitle='$670K+ RAISED IN STAGES 1 TO 3, STAGE 4 BURNED!'
                        title='VTRS PRESALE STAGE 5 OPENING AUGUST 12TH!' />
                    <div className='button'>
                        <button className='learnmore' style={{ cursor: 'pointer' }}>
                            Learn more <i className="fa-solid fa-database"></i>
                        </button>
                    </div>
                </div>
            </section>
            <div className='margin'></div>
        </>
    )
}

export default Hero