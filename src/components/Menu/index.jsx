import React, { useState, useEffect, useRef, useMemo } from 'react'
import { gsap } from 'gsap'
import './styles.scss'

const Menu = () => {
  const tl = useMemo(() => gsap.timeline({ paused: true }), [])
  const buttonRef = useRef(0)
  const overlayRef = useRef(0)
  const menuListRef = useRef(0)
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    tl.to(overlayRef.current, 0.7, { ease: 'power4.inOut', y: 0})
    .to(menuListRef.current, {visibility: 'visible'})
    .to(menuListRef.current.childNodes,{
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
      }
    )
  }, [])

  useEffect(() => {
    if (openMenu) {
      tl.play()
    } else {
      tl.reverse()
    }
  }, [openMenu])

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
    document.querySelector('body').classList.toggle('no-scrolling')
    console.log(getComputedStyle(document.documentElement).getPropertyValue("--vpdr"));
  }

  return (
    <div className="menu">
      <div
        ref={buttonRef}
        className={`menu__toggle ${openMenu ? 'menu__toggle--active' : ''}`}
        onClick={() => toggleMenu()}
      >
        <span />
        <span />
        <span />
      </div>
      <div className="menu__overlay" ref={overlayRef} />
      <div
        className="menu__list"
        ref={menuListRef}
      >
        <a className="menu__item" href="#data">
          trabajos
        </a>
        <a className="menu__item" href="#data">
          habilidades
        </a>
        <a className="menu__item" href="#data">
          sobre mi
        </a>
        <a className="menu__item" href="#data">
          hablemos
        </a>
      </div>
    </div>
  )
}

export default Menu
