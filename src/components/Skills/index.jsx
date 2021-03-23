import React from 'react'
import Title from '../Title'
import Tabs from '../Tabs'
import TabPane from '../Tabs/TabPane'
import Item from '../Item'
import './styles.scss'

const Skills = () => {
    return (
        <div id="skills" className="skills">
            <div className="skills__container">
                <Title title={'Habilidades'} />
                <p className="font-wght-300">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <Tabs>
                    <TabPane name="Programación" key="1">
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </TabPane>
                    <TabPane name="Diseño" key="2">
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default Skills
