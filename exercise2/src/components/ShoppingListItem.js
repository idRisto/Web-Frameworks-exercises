import React from "react";
import styles from './ShoppingListItem.module.css';
import cx from 'classnames';



/* Shopping list item */
const ShoppingListItem = props => {
  return <li className={ cx(styles.flex, styles.item) }>
    <div className={ styles.flex }>
      <div className={ cx(styles.flex, styles.itemQtyUnit) }>
        <div>
          { props.qty }
        </div>
        <div>
          { props.unit }
        </div>
      </div>
      <div>
        { props.value}
      </div>
    </div>
    <button onClick={ () => props.deletePushed( props.id ) }>Delete</button>
  </li>
}

export default ShoppingListItem;