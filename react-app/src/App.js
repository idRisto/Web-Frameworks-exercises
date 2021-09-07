import React from 'react';
import './App.css';
import Bluebar from './components/Bluebar';
import NewsBars from './components/NewsBars';
import MainNews from './components/MainNews';
import SideBar from './components/SideBar';
import SideBarNew from './components/SideBarNew';
import SideTopic from './components/SideTopic';
import news from './Data/news';
import luetuimmat from './Data/luetuimmat';
import notifications from './Data/notifications';
import uusimmat from './Data/uusimmat';


function App() {
  return (
    <div className='tausta'>
      <Bluebar />
        {
          notifications.map(element => <NewsBars topic={ element.topic } body={ element.body } />)
        }
        <div className='sideByside'>
          {
            news.map(element => <MainNews header={ element.header } topic={ element.topic } body={ element.body } info={ element.info } />)
          }
        <div>
          <SideTopic topic='Luetuimmat' />
          {
            luetuimmat.map(element => <SideBar number={ element.number } topic={ element.topic } body={ element.body } />)
          }
          <SideTopic topic='Uusimmat' />
          {
            uusimmat.map(element => <SideBarNew number={ element.number } topic={ element.topic } body={ element.body } />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
