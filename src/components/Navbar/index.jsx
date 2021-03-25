import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import Menu from '../Menu'
import './styles.scss'

const Navbar = () => {
    useEffect(() => {
        // gsap.from('.navbar', {
        //     y: -40,
        //     ease: "power4.out",
        //     duration: 2,
        //     opacity: 0
        // })
    }, [])
    return (
        <div className="navbar">
            <div className="navbar__content">
                <div className="navbar__logo">
                    <svg
                        viewBox="0 0 38 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0)">
                            <path
                                d="M18.3366 8.88019L16.5562 5.99805L0.476135 32.5369L32.6361 32.5637L31.327 30.3677"
                                stroke="#050E12"
                                strokeWidth="0.2"
                                strokeMiterlimit="5"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M18.2575 8.92722L31.2475 30.4156H5.13513L18.2575 8.92722ZM18.3649 8.7511L31.4614 30.4156H37.3179L21.2975 3.94864L18.3649 8.7511Z"
                                fill="url(#paint0_linear)"
                            />
                        </g>
                        <defs>
                            <linearGradient
                                id="paint0_linear"
                                x1="-5.63056"
                                y1="36.7784"
                                x2="36.2456"
                                y2="11.6107"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#1A4C5C" />
                                <stop offset="1" stopColor="#050E12" />
                            </linearGradient>
                            <clipPath id="clip0">
                                <rect
                                    width="37.3265"
                                    height="37"
                                    fill="white"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default Navbar
