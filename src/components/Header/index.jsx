import React from 'react'
import './styles.scss'

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__text">
        <span>Hola, un gusto.</span>
      </h1>
      <h1 className="header__text">
        <span className="animate-delay-3">Soy Javier.</span>
      </h1>
    </div>
  )
}

export default Header
