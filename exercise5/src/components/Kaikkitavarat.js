import React from 'react';
import styles from './Kaikki.module.css';
import Etsityt from './Etsityt';

export default function SearchView(props) {

  return (
    <div>
      <div className={ styles.gridi }>
      {
        props.items.map(item => <Etsityt key={item.id} {...item} />)
      }
      </div>
    </div>
  )
}