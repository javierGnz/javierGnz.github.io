import React from 'react'
import Title from '../Title'
import Tabs from '../Tabs'
import TabPane from '../Tabs/TabPane'
import Item from '../Item'
import './styles.scss'

const Skills = () => {
    return (
        <div id="skills" className="skills">
            <Title title={'Habilidades'} />
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            <Tabs>
                <TabPane name="Tab 1" key="1">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </TabPane>
                <TabPane name="Tab 2" key="2">
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
    )
}

export default Skills
