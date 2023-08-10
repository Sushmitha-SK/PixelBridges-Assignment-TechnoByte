import React from 'react'
import '../styles/Team.css'
import Baran_01 from '../assets/Baran_01.png'
import Brenton_01 from '../assets/Brenton_01.png'
import Taylor_02 from '../assets/Taylor_02.png'
import Jaren_01 from '../assets/Jaren_01.png'
import Tim_01 from '../assets/Tim_01.png'
import SolidProof_Logo from '../assets/SolidProof_Logo.png'
import Chad_01 from '../assets/Chad_01.png'
import Vector from '../assets/Vector.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Team = () => {
    const teamMembers = [
        {
            imgSrc: Chad_01,
            name: 'Chad Justice',
            designation: 'Chief Executive Officer',
            socialMedia: ['fab fa-twitter', 'fa-brands fa-linkedin']
        },
        {
            imgSrc: Brenton_01,
            name: 'Brenton Thai',
            designation: 'Chief Operating Officer',
            socialMedia: ['fab fa-twitter']
        },
        {
            imgSrc: Tim_01,
            name: 'Tim Benedict',
            designation: 'Chief Technology Officer',
            socialMedia: ['fab fa-twitter', 'fa-brands fa-linkedin']
        },
        {
            imgSrc: Taylor_02,
            name: 'Taylor Cox',
            designation: 'Director Product Design',
            socialMedia: ['fab fa-twitter', 'fa-brands fa-linkedin']
        },
        // {
        //     imgSrc: Chad_01,
        //     name: 'Chad Justice',
        //     designation: 'Chief Executive Officer',
        //     socialMedia: ['fab fa-twitter', 'fa-brands fa-linkedin']
        // },
        // {
        //     imgSrc: Chad_01,
        //     name: 'Chad Justice',
        //     designation: 'Chief Executive Officer',
        //     socialMedia: ['fab fa-twitter', 'fa-brands fa-linkedin']
        // },
        // {
        //     imgSrc: Chad_01,
        //     name: 'Chad Justice',
        //     designation: 'Chief Executive Officer',
        //     socialMedia: ['fab fa-twitter', 'fa-brands fa-linkedin']
        // }

    ];
    // Carousel responsive settings
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1, // Number of slides to move on each transition
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };


    return (
        <>
            <section className='team'>
                <div className='container flexSB'>
                    <div className='items'>
                        <div className='item flexSB'>
                            <div className='text'>
                                <h1 className='heading'>Meet the VITREUS Core Team</h1>
                                <p className='desc'>
                                    Our highly experienced team, led by seasoned businessmen and visionaries, is well-equipped to navigate even the toughest economic conditions. Our CEO’s successful track record in launching and growing projects, combined with their extensive experience in capital markets, make them the ideal leader for our team. With every member having gone through at least one project launch, we have a wealth of knowledge on what it takes to succeed, avoiding the pitfalls that come with starting up a new venture.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='team padding'>
                <div className='container grid'>

                    {/* <Carousel
                        className='carousel-container'
                        swipeable={true}
                        draggable={true}

                        responsive={responsive}
                        ssr={false}
                        infinite={true}
                        autoPlay={false}
                        keyBoardControl={true}
                        customTransition="transform 300ms ease-in-out"
                        transitionDuration={300}
                        containerClass='carousel-container'
                        removeArrowOnDeviceType={['tablet', 'mobile']}

                    > */}
                    {teamMembers.map((member, index) => (
                        <div key={index} className='items shadow teamcard'>

                            <img src={member.imgSrc} alt='' style={{ width: '160px', height: '160px' }} />
                            <h4 className='nameLabel'>{member.name}</h4>
                            <h4 className='nameDesignation'>{member.designation}</h4>
                            <button className='detailsButton'>View Details</button>
                            <div className='socialMedia'>

                                {member.socialMedia.map((iconClass, i) => (
                                    <i key={i} className={iconClass + ' social'}></i>
                                ))}

                            </div>
                        </div>
                    ))}
                    {/* </Carousel> */}
                </div >
            </section >


            <section className='team'>
                <div className='container flexSB'>
                    <div className='items kyc'>
                        <div className='item flexSB'>
                            <div className='text'>
                                <p className='desc'>
                                    In addition to being fully doxxed, our Core Team has also completed a full KYC process with SolidProof.
                                </p>
                                <img src={SolidProof_Logo} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='team'>
                <div className='container flexSB'>
                    <div className='items'>
                        <div className='item flexSB'>
                            <div className='text'>
                                <h1 className='heading'>VITREUS Newsletter</h1>

                                <div className='newsletter'>
                                    <p>Tired of having to follow all our movements on Social Media?</p>
                                    <p>Simply subscribe to our VITREUS Newsletter, stay up-to-date with all new
                                        developments, and never miss any important announcements again!</p>
                                    <div className='newsletterForm'>
                                        <input type='text' name='newsletterinput' />
                                        <button className='subscribeButton'>Subscribe</button>
                                    </div>

                                    <div className='poweredBy' style={{
                                        display: 'flex',
                                        justifyContent: 'center', alignItems: 'center',

                                    }}>
                                        <p>Powered by</p>
                                        <img src={Vector} alt='' />
                                        <p style={{
                                            color: ' #808C97',
                                            textAlign: 'center',
                                            fontFamily: 'DM Sans',
                                            fontSize: '14px',
                                            fontStyle: 'normal',
                                            fontWeight: 700,

                                        }}>Email Octopus</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}

export default Team