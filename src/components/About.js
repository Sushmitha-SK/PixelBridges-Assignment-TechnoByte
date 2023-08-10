import React, { useState } from 'react'
import '../styles/About.css'
import savemoney from '../assets/savemoney.png'
import savetime from '../assets/savetime.png'
import secure from '../assets/secure.png'
import uptodate from '../assets/secure.png'

const About = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleCardHover = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <>
            <section className='about padding'>
                <div className='container'>
                    <div id='heading'>
                        <h2 style={{
                            textAlign: 'left',
                            color: '#6DF1B2',
                            fontFamily: 'DM Sans',
                            fontWeight: 400,
                            fontSize: '30px'
                        }}>VITREUS aims to significantly reduce compliance-related
                            costs and workload within the BFSI sector</h2>
                        <p style={{
                            textAlign: 'left',
                            color: ' #EEF2F2',
                            fontFamily: 'DM Sans',
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '30px'
                        }}>VITREUS is developing a truly interconnected software and blockchain ecosystem with a compliance-specific, proprietary
                            Artificial Intelligence Engine at its center. The final product suite will set new standards for the Financial Services Sector, as
                            it is built for the specific regulatory needs of Registered Investment Advisors (RIAs), Broker Dealers, Tax and Accounting
                            Firms, Insurance Carriers, and Small Banks and Credit Unions. </p>
                    </div>

                    <div className='content grid2'>
                        <div className={`items shadow ${isFlipped ? 'flip' : ''}`}
                            onMouseEnter={handleCardHover}
                            onMouseLeave={handleCardHover}>
                            <div className='card-inner'>
                                <div className='card-front'>
                                    <div className='img'>
                                        <img src={savemoney} alt='' />
                                    </div>
                                    <div className='text'>
                                        <h1>Save Money</h1>
                                    </div>
                                </div>
                                {isFlipped && (
                                    <div className='card-back'>
                                        <p>VITREUS can help to significantly reduce the cost of existing tech-stacks, compliance personnel and their (re)training.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className={`items shadow ${isFlipped ? 'flip' : ''}`}
                            onMouseEnter={handleCardHover}
                            onMouseLeave={handleCardHover}>
                            <div className='card-inner'>
                                <div className='card-front'>
                                    <div className='img'>
                                        <img src={savetime} alt='' />
                                    </div>
                                    <div className='text'>
                                        <h1>Save Time</h1>
                                    </div>
                                </div>
                                {isFlipped && (
                                    <div className='card-back'>
                                        <p>With most of the compliance-related tasks being repetitive and meticulous, VITREUS uses sophisticated machine learning frameworks to manage and assist with the bulk of the workload.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className={`items shadow ${isFlipped ? 'flip' : ''}`}
                            onMouseEnter={handleCardHover}
                            onMouseLeave={handleCardHover}>
                            <div className='card-inner'>
                                <div className='card-front'>
                                    <div className='img'>
                                        <img src={uptodate} alt='' />
                                    </div>
                                    <div className='text'>
                                        <h1>Always Up-2-Date</h1>
                                    </div>
                                </div>
                                {isFlipped && (
                                    <div className='card-back'>
                                        <p>VITREUS provides intelligence needed to compliantly operate in regulated environments. Regulatory changes, enforcement actions, and any other relevant news and data is filtered to the specific needs of the client's business.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className={`items shadow ${isFlipped ? 'flip' : ''}`}
                            onMouseEnter={handleCardHover}
                            onMouseLeave={handleCardHover}>
                            <div className='card-inner'>
                                <div className='card-front'>
                                    <div className='img'>
                                        <img src={secure} alt='' />
                                    </div>
                                    <div className='text'>
                                        <h1>Secure & Audit-ready</h1>

                                    </div>
                                </div>
                                {isFlipped && (
                                    <div className='card-back'>
                                        <p>VITREUS sets new standards in all aspects of safe and compliant data storage and access control, while also making any relevant information instantly available for detailed reporting and auditing.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}

export default About