import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from './../../reducers/login'
import { Row, Input, } from 'react-materialize';
import { checkLogin } from '../../actions'
// import './LoginForm.css'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        let {username, password} = this.state;
        let {isLoginPending, isLoginSuccess, loginError} = this.props;
        return (
            <form name="loginForm" onSubmit={this.onSubmit}>
                <Row>
                    <Input label="Usuario" s={6} onChange={e => this.setState({username: e.target.value})} value={username}/>
                    <Input type="password" label="password" s={6} onChange={e => this.setState({password: e.target.value})} value={password}/>
                    <Input type="submit" value="Login" />
                </Row>
                <Row>
                    <div className="message">
                        { isLoginPending && <div>Please wait...</div> }
                        { isLoginSuccess && <div>Success.</div> }
                        { loginError && <div>{loginError.message}</div> }
                    </div>
                </Row>
            </form>
        )
    }

    onSubmit(e) {
        e.preventDefault();
        let { username, password } = this.state;
        this.props.login(username, password);
        this.setState({
          username: '',
          password: ''
        });
      }
    
}

const mapStateToProps = (state) => {
    return {
      isLoginPending: state.isLoginPending,
      isLoginSuccess: state.isLoginSuccess,
      loginError: state.loginError
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      login: (username, password) => dispatch(checkLogin(username, password))
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);