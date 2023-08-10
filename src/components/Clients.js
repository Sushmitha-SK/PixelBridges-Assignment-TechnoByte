import React from 'react'
import '../styles/Clients.css'
import cloudfarelogo from '../assets/Cloudflare-Logo.png'
import inniwiselogo from '../assets/innowise-Logo.png'
import redhatlogo from '../assets/Redhat-Logo.png'

const Clients = () => {
    return (
        <>
            <section className='clients'>
                <div className='container flexSB'>
                    <div className='items'>
                        <div className='item flexSB'>

                            <div className='text'>
                                <h1 className='heading'>The Market Potential of VITREUS</h1>
                                <p className='desc'>
                                    The Financial Services sector in the USA presents a significant market potential for an application and ecosystem as unique as VITREUS. The industry is constantly evolving with new regulations and technologies, creating a demand for innovative solutions. A product like VITREUS, that offers a differentiated approach to address current challenges faced by businesses and institutions in the financial sector can easily gain a competitive advantage and capture a significant share of the market.<br /><br />
                                    Additionally, with a growing trend towards digitization and automation, the demand for solutions based on blockchain technology is expected to continue to rise. This presents a significant opportunity for a well-designed and efficiently marketed solutions to establish itself as a market leader and tap into the vast potential in the US Financial Services sector.<br /><br />
                                    However, VITREUS has no intention to limit its solutions and services to the US market alone.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='awrapper'>
                <div className='container  flex-center'>
                    <div className='box flex'>

                        <div className='text'>
                            <h1 style={{
                                color: '#6DF1B2',
                                fontFamily: 'DM Sans',
                                fontSize: '68px',
                                fontWeight: 700

                            }}>14,800+</h1>
                            <h3>Registered Investment Advisors</h3>
                        </div>
                    </div>

                    <div className='box flex'>
                        <div className='text'>
                            <h1 style={{
                                color: '#6DF1B2',
                                fontFamily: 'DM Sans',
                                fontSize: '68px',
                                fontWeight: 700

                            }}>10,500+</h1>
                            <h3>Banks & Credit Unions (FDIC & OCC)</h3>
                        </div>
                    </div>


                </div>
                <div className='container center-grid'>
                    <div className='box flex'>
                        <div className='text'>
                            <h1 style={{
                                color: '#1CC5F9',
                                fontFamily: 'DM Sans',
                                fontSize: '79px',
                                fontWeight: 700

                            }}>25,000+</h1>
                            <h3>Potential VITREUS Clients in the USA alone</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className='clients' style={{ marginTop: '13%' }}>
                <div className='container flexSB'>
                    <div className='items'>
                        <div className='item flexSB'>

                            <div className='text'>
                                <h1 className='heading'>Technology and Development Partners</h1>
                                <p className='desc'>
                                    VITREUS has a grand vision – and realizing an endeavour at this scale does not only require a top notch team but also established and experienced partners who are able to help with bringing this vision to life. Therefore we are proud to have partnered with a number of renown industry and innovation leaders in their respective fields and are looking forward to change the Financial Services Sector with these collaborations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='awrapper'>
                <div className='container  flex-center'>
                    <div className='box flex'>
                        <div className='text'>
                            <img src={inniwiselogo} alt=''
                                style={{ cursor: 'pointer', width: '250px' }} />
                            <h1 style={{
                                color: '#1CC5F9',
                                fontFamily: 'DM Sans',
                                fontSize: '20px',
                                fontWeight: 700,
                                cursor: 'pointer'

                            }}>innowise</h1>
                            <h3 style={{
                                color: '#EEF2F2',
                                fontFamily: 'DM Sans',
                                fontSize: '20px',
                                fontWeight: 400,

                            }}>Development Partner</h3>
                        </div>
                    </div>
                    <div className='box flex'>
                        <div className='text'>
                            <img src={redhatlogo} alt=''
                                style={{ cursor: 'pointer', width: '250px' }} />
                            <h1 style={{
                                fontFamily: 'DM Sans',
                                fontSize: '20px',
                                fontWeight: 700,
                                cursor: 'pointer'

                            }}>RedHat</h1>
                            <h3 style={{
                                color: '#EEF2F2',
                                fontFamily: 'DM Sans',
                                fontSize: '20px',
                                fontWeight: 400,

                            }}>Infrastructure Provider</h3>
                        </div>
                    </div>
                    <div className='box flex'>
                        <div className='text'>
                            <img src={cloudfarelogo} alt='' style={{ cursor: 'pointer', width: '250px' }} />
                            <h1 style={{
                                fontFamily: 'DM Sans',
                                fontSize: '20px',
                                fontWeight: 700,
                                cursor: 'pointer'

                            }}>RedHat</h1>
                            <h3 style={{
                                color: '#EEF2F2',
                                fontFamily: 'DM Sans',
                                fontSize: '20px',
                                fontWeight: 400,

                            }}>Cybersecurity Partner</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Clients