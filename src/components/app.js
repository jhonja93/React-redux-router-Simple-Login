import React, { Component } from 'react'
import Home from './home'
import { Preloader, Navbar } from 'react-materialize'
import { Link } from 'react-router-dom'

import items from '../data/menu';

class App extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Navbar brand='React-Redux Login' right className="navbar">
          <ul className="Menu">
            {
              items && items.map(
                (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>
              )
            }
          </ul>
        </Navbar>
        <Home body={children}/>
      </div>
    );
  }
}


export default App
