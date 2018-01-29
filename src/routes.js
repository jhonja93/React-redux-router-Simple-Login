import React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from './components/app'
import Home from './components/home'
import Login from './components/LoginForm'
import Logout from './components/logout'

//Desde este archivo controlamos las diferentes rutas, actualmente la ruta de /login no esta siendo
// usada ya que en el mismo componente de Home mostramos el fomulario y el listado de usuarios
// dependiendo el estado de login
const AppRoutes = () => (
    <App>
        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/login" component={Login} /> */}
            <Route exact path="/logout" component={Logout} />
        </Switch>
    </App>
)

export default AppRoutes