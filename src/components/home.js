import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showUsers, checkLogin } from '../actions'
import UsersTable from './UsersTable'
import LoginForm from './LoginForm'

class Home extends Component {

  constructor() {
    super()

    this.state = {
      users: null,
      logged: false
    }
  }

  componentWillMount() {
    this.props.showUsers()
    this.props.checkLogin()
  }

  renderUsersList() {
     return this.props.users.map((user) => {
       return (
         <tr key={user.id}>
           <td>{user.id}</td>
           <td>{user.name}</td>
           <td>{user.email}</td>
         </tr>
       )
     })
  }

  render() {
    const {users, logged} = this.props
    return (
      <div>
        {/* La propiedad propped es la que nos dira si se encuentra logeado o no y mostramos los componentes en base a ella */}
        { logged && <UsersTable users={users}/>}
        { !logged && <p className="mensaje" >Necesitas autenticarte para ver el contenido</p>}
        { !logged && <LoginForm />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.user.list,
    logged: state.login.logged
  }
}

export default connect(mapStateToProps, { showUsers, checkLogin })(Home)
