import React from 'react'
import styles from './Sidetopic.module.css'

export default function SideTopic(props) {
    return (
        <div className={ styles.container}>
            <div className={ styles.topic}>
              { props.topic }
            </div>
        </div>
    )
}
