import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showUsers, login } from '../actions'
import randomToken from 'random-token'
import UsersTable from './UsersTable'
import LoginForm from './LoginForm'

class Home extends Component {

  constructor() {
    super()

    this.state = {
      users: null,
      login: false
    }
  }

  componentWillMount() {
    this.props.showUsers()
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
    const {users, login} = this.props
    return (
      <div>
        {login? (!users? <div>'Error al cargar usuarios'</div> : <UsersTable users={users}/>) : <LoginForm />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.user.list
  }
}

export default connect(mapStateToProps, { showUsers })(Home)
