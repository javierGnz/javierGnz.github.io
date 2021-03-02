import React from 'react'
import './assets/scss/app.scss'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Work from './components/Work'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
    const rzs = () => {
        let vpw = window.innerWidth 
        let vph = window.innerHeight
        let vpd = parseInt(Math.sqrt(vpw * vpw + vph * vph) + 1)
        document.documentElement.style.setProperty("--vpw", "".concat(vpw, "px"))
        document.documentElement.style.setProperty("--vph", "".concat(vph, "px"))
        document.documentElement.style.setProperty("--vpd", "".concat(vpd, "px"))
        document.documentElement.style.setProperty("--vpdr", "".concat(vpd / 32, 3))
    }
    window.onresize = () => {
        rzs()
    }
    return (
        <div className="wrapper">
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
