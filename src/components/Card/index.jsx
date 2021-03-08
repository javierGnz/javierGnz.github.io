import React from 'react'
import './styles.scss'

const Card = (props) => {
    return (
        <a className="card" href={props.link} target="_blank" rel="noreferrer">
            <img className="card__img" src={props.img} alt={props.title}/>
            <h4 className="card__brand">{props.title}</h4>
            <p className="card__text">{props.about}</p>
        </a>
    )
}

export default Card
