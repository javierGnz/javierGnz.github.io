import React, { useEffect, useState } from 'react'
import TabPane from './TabPane'
import './styles.scss'

const Tabs = (props) => {
    const { children } = props
    const [tabHeader, setTabHeader] = useState([])
    const [childContent, setChildConent] = useState({})
    const [active, setActive] = useState('')
    useEffect(() => {
        const headers = []
        const childCnt = {}
        React.Children.forEach(children, (element) => {
            if (!React.isValidElement(element)) return
            const { name } = element.props
            headers.push(name)
            childCnt[name] = element.props.children
        })
        setTabHeader(headers)
        setActive(headers[0])
        setChildConent({ ...childCnt })
        console.log(childCnt)
    }, [props, children])

    const changeTab = (name) => {
        setActive(name)
    }

    return (
        <div className="tabs">
            <ul className="tabs__nav">
                {tabHeader.map((item, index) => (
                    <li
                        onClick={() => changeTab(item)}
                        key={index}
                        className={item === active ? 'tabs__nav-item tabs__nav-item--active' : 'tabs__nav-item'}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <div className="tabs__content">
                {Object.keys(childContent).map((key, index) => {
                    if (key === active) {
                        return <div className="tabs__content-item" key={index}>{childContent[key]}</div>
                    } else {
                        return null
                    }
                })}
            </div>
        </div>
    )
}

Tabs.propTypes = {
    children: function (props, propName, componentName) {
        const prop = props[propName]

        let error = null
        React.Children.forEach(prop, function (child) {
            if (child.type !== TabPane) {
                error = new Error(
                    '`' +
                        componentName +
                        '` children should be of type `TabPane`.'
                )
            }
        })
        return error
    },
}

export default Tabs
