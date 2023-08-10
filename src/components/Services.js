import React from 'react'
import '../styles/Services.css'
import employee from '../assets/employee.jpg'
import system from '../assets/system.jpg'
import ai from '../assets/AI.jpg'
import smartchain from '../assets/smartchain.jpg'

const Services = () => {
    return (
        <>
            <section className='services'>
                <div className='container flexSB'>
                    <div className='left row'>
                        <div className='items'>

                            <div className='item flexSB'>

                                <div className='text'>
                                    <h1 className='heading'>Future-proofing your Enterprise with AI and Blockchain Technology</h1>
                                    <p className='desc'>
                                        The BFSI sector needs better compliance, data delivery, security, speed and simplicity to meet regulatory and customer demands in a changing world.<br /><br />

                                        VITREUS is here to fulfill those requirements with a cost-effective and interconnected system that can quickly be customized to the specific needs and policies of each individual business.<br /><br />

                                        The system serves as a hub for the secure and compliant handling of everyday tasks and obligations and is designed to be industry-agnostic, so it can quickly and easily be adapted to other regulated industries in future roll-outs.

                                        In its initial build the system comprises of three main components.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right row'>
                        <img src={employee} alt=''
                            style={{
                                width: '450px',
                                height: '600px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingTop: '15%',
                                borderRadius: '25px 0px 25px 0px'
                            }} />
                    </div>
                </div>
                <div className='container flexSB'>
                    <div className='left row'>
                        <img src={system} alt=''
                            style={{
                                width: '570px',
                                height: '570px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingTop: '15%'
                            }} />
                    </div>
                    <div className='right row'>
                        <div className='items'>
                            <div className='item flexSB'>
                                <div className='text'>
                                    <h1 className='heading'>VITREUS Essentials</h1>
                                    <p className='desc'>VITREUS Essentials is our client-facing Business Software which serves as the portal to the VITREUS Ecosystem. From here clients can handle their daily business tasks and obligations, manage traditional and digital assets, and create and utilize smart contracts.<br />

                                        Furthermore it provides dynamic prompting for compliance issues, meetings, deadlines, document storage, and a regulatory intelligence feed that can be customized and filtered to fit the specific requirements of the client business.<br />

                                        The transition to VITREUS Essentials can be realized in a very cost-effective manner with virtually no downtime, as it is specifically designed to integrate seamlessly with all common ERP and CRM applications used throughout the industry.</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className='container flexSB'>
                    <div className='left row'>
                        <div className='items'>

                            <div className='item flexSB'>

                                <div className='text'>
                                    <h1 className='heading'>COMPLiQ - Artificial Intelligence Engine built for Regulatory Assurance and Compliance</h1>
                                    <p className='desc'>
                                        COMPLiQ is the proprietary Artificial Intelligence Engine of VITREUS developed specifically for compliant operation in regulated industries. It is fast, scalable, and self-learning and provides dynamic handling of repetitive compliance-related tasks.<br /><br />

                                        Its data pipeline, learning processes and inference processes are all bound to the blockchain for transparent audit and development trails.<br /><br />

                                        COMPLiQ also manages compliant data storage and recordkeeping and – just like every other component of the VITREUS Ecosystem – is designed as an industry-agnostic framework that can easily be trained for other regulated environments than the BFSI sector.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='right row'>
                        <img src={ai} alt=''
                            style={{
                                width: '450px',
                                height: '600px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingTop: '15%',

                            }} />
                    </div>
                </div>

                {/* Section 4 */}
                <div className='container flexSB'>
                    <div className='left row'>
                        <img src={smartchain} alt=''
                            style={{
                                width: '570px',
                                height: '570px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingTop: '15%'
                            }} />
                    </div>
                    <div className='right row'>
                        <div className='items'>
                            <div className='item flexSB'>
                                <div className='text'>
                                    <h1 className='heading'>VITREUS Smartchain</h1>
                                    <p className='desc'>
                                        The VITREUS Smartchain is specifically designed to match the security and privacy requirements of the Financial Sector and other industries handling sensitive data.<br /><br />

                                        It is a 3-Layer, permissioned Blockchain that houses digital assets, tokenized securities, and smart contracts on a highly scalable and energy efficient infrastructure and allows clients to deploy their private blockchain environment, keeping all transactions private to that businesses permission tree. In addition clients can also deploy applications for use by their permissioned customers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services