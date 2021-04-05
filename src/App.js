import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import './assets/scss/app.scss'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Work from './components/Work'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
    const initPage = () => {
        document.querySelector('html').scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
        gsap.fromTo(
            '.wrapper__overlay',
            { y: '0' },
            { y: '-100%', ease: 'power4.out', duration: 2 }
        )
    }

    useEffect(() => {
        initPage()
    }, [])

    return (
        <div className="wrapper">
            <div className="wrapper__overlay">
                <h1>Javier Gonzalez</h1>
            </div>
            <Navbar />
            <Header />
            <div className="wrapper__content">
                <Work />
                <Skills />
                <About />
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default App
