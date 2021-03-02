import React from 'react'
import Card from '../Card'
import Title from '../Title'
import './styles.scss'

const Work = () => {
  return (
    <div id="work" className="work">
      <Title title={'Trabajos'} subtitle={'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'} />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Work
