import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 12, unit: 'x' }
      ]
    };
    
  }
  randInt(max) {
    return Math.floor(Math.random()*max) + 1;
  }

  addItems = (description, uniitti) => {
    const quanity = this.randInt(10);
    return () => {
      const Result = this.state.items.findIndex((element) => {
        if (element.value === description) {
          return true;
        } else return false;
      });

      if (Result !== -1) {
        console.log('Success');
        let newItems = [...this.state.items];
        newItems[Result].qty += quanity;

        this.setState({ items: newItems });
      }
      else {
        this.setState({ items: [...this.state.items, {id: this.state.items.length +1, value: description, qty: quanity, unit: uniitti}] });
      }
    }
  }

  deletePushed = (IdDelete) => {

    let newItems = this.state.items.filter(item => item.id !== IdDelete);
    this.setState({ items : newItems });
    //Tässä tyylissä on bugi! Kun poistetaan listalta ensimmäinen tuote ja lisätään uusi, kahdella viimeisellä on sama id!!
    /* Vaikeampi tapa!!
    let IndexToDelete = this.state.items.findIndex(item => item.id === IdDelete);
    if ( IndexToDelete !== -1) {
      let newItems = [...this.state.items ];
      newItems.splice(IndexToDelete, 1);
      this.setState({ items: newItems });
    }
    */
  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <div className={ styles.buttons }>
        <button className={ styles.button } onClick={ this.addItems('Carrots', 'x') }>Carrots</button>
        <button className={ styles.button } onClick={ this.addItems('Berries', 'kg') }>Berries</button>
        <button className={ styles.button } onClick={ this.addItems('Beer', 'Bottles') }>Beer</button>
        <button className={ styles.button } onClick={ this.addItems('Dog Food', 'Sack') }>Dog Food</button>
      </div>
      <ShoppingList items={ this.state.items } deletePushed= { this.deletePushed }/>
    </div>
  }
}

export default App;