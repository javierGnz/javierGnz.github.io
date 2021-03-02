import React from 'react'
import './styles.scss'

const Title = (props) => {
  return (
    <div className="title">
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
    </div>
  )
}

export default Title
