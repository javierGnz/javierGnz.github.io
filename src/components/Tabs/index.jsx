import React from 'react'
import Item from '../Item'
import './styles.scss'

const Tabs = () => {
    return (
        <div className="tabs">
            <nav className="tabs__nav">
                <div className="tabs__nav-item">Front-end</div>
                <div className="tabs__nav-item">Diseñador</div>
            </nav>
            <div className="tabs__content">
                <div className="tabs__content-item">
                    {Array(5)
                    .fill()
                    .map((e, i) => (
                        <Item key={i} />
                    ))}
                </div>
                <div className="tabs__content-item">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugiat accusantium unde. Officia ipsa at accusantium minus asperiores repudiandae hic porro? Soluta voluptatum animi debitis sunt esse. Ab, eius minima?</p>
                </div>
            </div>
        </div>
    )
}

export default Tabs
