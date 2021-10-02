import React from 'react';
import styles from './Etsityt.module.css';

export default function SearchResult(props) {
  return (
    <div className={ styles.product }>
        <div>
          <div><img className={ styles.image } src={`/images/${props.image}`} /></div>
          <div className={ styles.tuote }>{ props.tuote }</div>
          <div className={ styles.valmistaja }>by { props.valmistaja }</div>
          <div className={ styles.flex }>
            <img className={ styles.iconStars }></img>
            ^ <span className={ styles.blue }>{ props.arvostelut }</span>
          </div>
          <div className={ styles.hinta }>
            <span className={ styles.dollari }>$</span>{ props.dollarit }
            <span className={ styles.dollari }>{ props.sentit }</span>
          </div>
        </div>
    </div>
  )
}
