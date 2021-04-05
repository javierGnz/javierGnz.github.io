import React from 'react'
import './styles.scss'

const Item = ({ svg, title }) => {
    return (
        <div className="item">
            <div className="item__icon">{svg}</div>
            <div className="item__text">{title}</div>
        </div>
    )
}

export default Item
