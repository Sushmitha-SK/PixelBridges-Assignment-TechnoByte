import React, { useState } from "react"
import { Link } from "react-router-dom"
import '../styles/Header.css'
import logo from '../assets/logo.png'

const Header = () => {
    const [click, setClick] = useState(false)

    return (
        <>
            <section className='head'>
                <div className='container flexSB'>
                    <div className='logo'>
                        &nbsp;
                    </div>
                    <div className='social'>
                        <i className='fab fa-twitter icon'></i>
                        <i class="fa-brands fa-discord icon"></i>
                        <i class="fa-brands fa-telegram icon"></i>
                        <i className='fab fa-youtube icon'></i>
                        <i class="fa-brands fa-linkedin icon"></i>
                        <i class="fa-brands fa-facebook icon"></i>
                    </div>
                </div>
            </section>
            <header>
                <nav className='flexSB'>
                    <img src={logo} alt='technobytelogo' style={{ height: '80px', paddingLeft: '24px' }} />
                    <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
                        <li className="dropdown">
                            <span>About&nbsp;
                                <i className="fas fa-angle-down"
                                    style={{
                                        marginTop: '2px',
                                        marginRight: '2px',
                                        fontSize: '14px'
                                    }}>
                                </i>
                            </span>

                            <ul className="dropdown-content">
                                <li><Link to="/">VITREUS</Link></li>
                                <li><Link to="/">Regulatory Compliance</Link></li>
                                <li><Link to="/">Our Partners</Link></li>
                                <li><Link to="/">Our Team</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <span>B2B Solutions&nbsp;
                                <i className="fas fa-angle-down"
                                    style={{
                                        marginTop: '2px',
                                        marginRight: '2px',
                                        fontSize: '14px'
                                    }}>
                                </i>
                            </span>

                            <ul className="dropdown-content">
                                <li><Link to="/">VITREUS Essentials</Link></li>
                                <li><Link to="/">COMPLiQ – AI Engine</Link></li>
                                <li><Link to="/">VITREUS Smartchain</Link></li>

                            </ul>
                        </li>
                        <li className="dropdown">
                            <span>VTRS Ecosystem&nbsp;
                                <i className="fas fa-angle-down"
                                    style={{
                                        marginTop: '2px',
                                        marginRight: '2px',
                                        fontSize: '14px'
                                    }}>
                                </i>
                            </span>

                            <ul className="dropdown-content">
                                <li><Link to="/">The Power Grid</Link></li>
                                <li><Link to="/">vNodes – Smartchain Validators</Link></li>
                                <li><Link to="/">Staking</Link></li>
                                <li><Link to="/">VTRS Litepaper</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <span>VTRS Presale&nbsp;
                                <i className="fas fa-angle-down"
                                    style={{
                                        marginTop: '2px',
                                        marginRight: '2px',
                                        fontSize: '14px'
                                    }}>
                                </i>
                            </span>

                            <ul className="dropdown-content">
                                <li><Link to="/">How-to-buy Video</Link></li>
                                <li><Link to="/">Presale Structure</Link></li>
                                <li><Link to="/">Tokenomics</Link></li>
                                <li><Link to="/">Presale FAQ</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <span>Resources&nbsp;
                                <i className="fas fa-angle-down"
                                    style={{
                                        marginTop: '2px',
                                        marginRight: '2px',
                                        fontSize: '14px'
                                    }}>
                                </i>
                            </span>

                            <ul className="dropdown-content">
                                <li><Link to="/">Videos & AMAs</Link></li>
                                <li><Link to="/">Branding</Link></li>
                                <li><Link to="/">Newsletter</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <button className='toggle' onClick={() => setClick(!click)}>
                        {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
                    </button>
                </nav>
            </header >
        </>
    )
}

export default Header
