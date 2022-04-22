import React from 'react';
import data from './data.json'
import styles from './App.module.css';
import Kaikkitavarat from './components/Kaikkitavarat';
import axios from 'axios'
import AdminView from './components/AdminView';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: [],
      etsiString: "",
      adminModeActive: false,
    }
  }

  componentDidMount() {
    console.log("Mounted")
    axios.get('http://localhost:4000/products')
      .then(response => {
        console.log(response);
        this.setState({ items : response.data.items });
      })
      .catch(err => console.log(err));
  }

  KunEtsitään = (event) => {
    this.setState({ etsiString: event.target.value });
  }

  addNewItem = (tuote, valmistaja, type, dollarit, sentit) => {
    let newItems = [...this.state.items];
    newItems.push({
      id: newItems.length + 1,
      tuote: tuote,
      valmistaja: valmistaja,
      type: type,
      dollarit: dollarit,
      sentit: sentit
    });

    this.setState({
      items: newItems
    });

    axios.post('http://localhost:4000/products', this.state.items)
      .then(response => {
        console.log(response);
        this.setState({ items: response.data.items });
      })
      .catch(err => console.log(err));
  }

  deleteItem = itemId => this.setState({items: this.state.items.filter(item => item.id !== itemId)})

  render()
  {
    let output =
          <div>
            <div className={ styles.topBar }>
              <button className={ styles.admin } onClick={() => this.setState({adminModeActive: !this.state.adminModeActive})}>Admin mode</button>      
              <div className={ styles.search }>Search <input type="text" onChange={ this.KunEtsitään } value={ this.state.etsiString }/></div>
            </div>
            <Kaikkitavarat
              items={ this.state.items}//.filter((item) => item.tuote.includes( this.state.etsiString )) }
              />
          </div>

    if(this.state.adminModeActive) {
      output = <AdminView
                  disableAdminMode={() => this.setState({adminModeActive: false})}
                  addNewItem={ this.addNewItem }
                  items={ this.state.items }
                  deleteItem={ this.deleteItem }
                />;
    }

    return (
      <>
        { output }
      </>
    )
  }
}

export default App;