import React from 'react'
import './styles.scss'

const Card = (props) => {
    return (
        <div className="card">
            <h4 className="card__brand">{props.title}</h4>
            <p className="card__text">{props.about}</p>
            <div className="card__img">
                <img src={props.img} alt={props.title}/>
            </div>
        </div>
    )
}

export default Card
