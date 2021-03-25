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
        gsap.fromTo(
            '.wrapper__overlay',
            { y: '0'},
            { y: '-100%', ease: 'power4.out', duration: 2 }
        )
        setTimeout(() => {document.querySelector('body').classList.remove('no-scrolling')}, 2300);
    }

    useEffect(() => {
        initPage()
    }, [])

    return (
        <div className="wrapper">
            <div className="wrapper__overlay" />
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
