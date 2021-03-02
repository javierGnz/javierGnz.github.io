import React from 'react'
import Title from '../Title'
import Tabs from '../Tabs'
import './styles.scss'

const Skills = () => {
    return (
        <div id="skills" className="skills">
            <Title title={'Habilidades'} subtitle={'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'} />
            <Tabs />
        </div>
    )
}

export default Skills
