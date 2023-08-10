import React from "react"
import "../styles/Footer.css"
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container padding'>
                    <div className='box logo'>
                        <img src={logo} alt="" />
                        <p>Streamline your business with Blockchain technology and Artificial Intelligence.</p>
                        <div className='social'>
                            <i className='fab fa-twitter icon'></i>
                            <i class="fa-brands fa-discord icon"></i>
                            <i class="fa-brands fa-telegram icon"></i>
                            <i className='fab fa-youtube icon'></i>
                            <i class="fa-brands fa-linkedin icon"></i>
                            <i class="fa-brands fa-facebook icon"></i>
                        </div>
                    </div>
                    <div className='box link'>
                        <h3>About</h3>
                        <ul>
                            <li>VITREUS</li>
                            <li>Regulatory Compliance</li>
                            <li>Our Partners</li>
                            <li>Our Team</li>
                        </ul>
                    </div>
                    <div className='box link'>
                        <h3>VTRS Ecosystem</h3>
                        <ul>
                            <li>The Power Plant</li>
                            <li>The Power Grid</li>
                            <li>vNodes</li>
                            <li>Staking</li>
                            <li>VTRS Litepaper</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Resources</h3>
                        <ul>
                            <li>Video Gallery</li>
                            <li>Branding</li>
                            <li>Newsletter</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Business Solutions</h3>
                        <ul>
                            <li>VITREUS Essentials</li>
                            <li>COMPLiQ - AI Engine</li>
                            <li>VITREUS Smartchain</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>VTRS Presale</h3>
                        <ul>
                            <li>Presale Information</li>
                            <li>Presale Structure</li>
                            <li>Tokenomics</li>
                            <li>Presale FAQ</li>
                            <li>Buy VTRS now!</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Get In Touch</h3>
                        <ul>
                            <li>mail@vitreus.io</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Marketing Inquiries</h3>
                        <ul>
                            <li>marketing@vitreus.io</li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className='legal'>
                <p>
                    <span> Cookie Policy</span> | <span> Privacy Statement </span> | <span>Opt-out Preferences</span> | <span>Disclaimer</span><br />
                    ©2023, Collaborative Digital Labs Ltd. All Rights Reserved.
                </p>
            </div>
        </>
    )
}

export default Footer
