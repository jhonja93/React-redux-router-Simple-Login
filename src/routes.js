import React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from './components/app'
import Home from './components/home'
import Login from './components/LoginForm'
import Logout from './components/logout'

const AppRoutes = () => (
    <App>
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
        </Switch>
    </App>
)

export default AppRoutes