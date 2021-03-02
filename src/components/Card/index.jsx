import React from 'react'
import './styles.scss'

const Card = () => {
    return (
        <div className="card">
            <h4 className="card__brand">Transbank</h4>
            <p className="card__text">Desarrollo realizado para mejorar y optimizar el cumplimiento de plazos etc.</p>
            <div className="card__img">
                <img src="https://images.pexels.com/photos/131778/pexels-photo-131778.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt=""/>
            </div>
        </div>
    )
}

export default Card
