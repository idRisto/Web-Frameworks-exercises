import React from 'react'
import styles from './Side.module.css'

export default function SideBar(props) {
    return (
        <div className={ styles.container }>
            <div className={ styles.textcont }>
                <div className={ styles.aika }>
                    { props.number }
                </div>
                <div className={ styles.textbox }>
                    <div><span className={ styles.topic }>{ props.topic }</span> { props.body }</div>
                </div>
            </div>
        </div>
    )
}
