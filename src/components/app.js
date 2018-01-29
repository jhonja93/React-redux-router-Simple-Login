import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkLogin, logout } from '../actions'

import Content from './content'
import { Preloader, Navbar } from 'react-materialize'
import { Link } from 'react-router-dom'

class App extends Component {

  constructor() {
    super()

    this.state = {
      logged: false
    }
  }

  render() {
    const { children, logged } = this.props
    return (
      <div>
        {/* Componente principal, mostramos el Navbar junto a los links y el contenido de cada ruta a traves de Component */}
        <Navbar brand='React-Redux Login' right className="navbar">
          <ul className="Menu">
            <li><Link to="/">Home</Link></li>
            {/* <li><Link to="/login">Login</Link></li> */}
            <li>{ logged && <Link to="/logout" onClick={logout()}>Logout</Link>}</li>
          </ul>
        </Navbar>
        <Content body={children} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('STATE ',state)
  return {
    logged: state.login.logged
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
}

export default connect(mapStateToProps, { checkLogin })(App)
