import React from 'react';
import data from './data.json'
import styles from './App.module.css';
import Kaikkitavarat from './components/Kaikkitavarat';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      etsiString: "",
    }
  }

  KunEtsitään = (event) => {
    this.setState({ etsiString: event.target.value });
  }

  render()
  {
    return <div>
            <div className={ styles.search }>
              Search <input type="text" onChange={ this.KunEtsitään } value={ this.state.etsiString }/>
            </div>
            <Kaikkitavarat
              items={ this.state.items.filter((item) => item.tuote.includes(this.state.etsiString)) }
              />
           </div>
  }
}

export default App;