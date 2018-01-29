import React, { Component } from 'react';
import { showUsers } from '../../actions'
import { Table } from 'react-materialize';

class UsersTable extends Component {

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
        return (
            <div>
            <h2>User List</h2>
            <Table bordered>
            <thead>
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody>{ this.renderUsersList() }</tbody>
            </Table>
            </div>
        );
    }
}

export default UsersTable;