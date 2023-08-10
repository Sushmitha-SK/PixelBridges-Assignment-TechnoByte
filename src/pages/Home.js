import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Clients from '../components/Clients'
import Team from '../components/Team'

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Clients />
            <Team />
        </>
    )
}

export default Home