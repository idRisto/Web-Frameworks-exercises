import React from 'react'
import styles from './MainNews.module.css'

export default function MainNews(props) {
    return (
        <div className={ styles.container }>
            <div className={ styles.textcont }>
                <div className={ styles.header }> { props.header } </div>
                <img className={ styles.image } src='Frisbeegolf.jpg' alt='Kuva korista' />
                <div className={ styles.imageText }>
                    <span className={ styles.bluetext }>{ props.topic } | </span> { props.body } 
                </div>
                <div className={ styles.infoClock }>
                    { props.info }
                </div>
            </div>
        </div>
    )
}
