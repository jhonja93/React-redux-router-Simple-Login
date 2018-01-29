import React, { Component } from 'react';
// Componente simple que me renderizara un mensaje cuando el estado cambie a Loggout
// el cambio de estado lo hago antes de renderizar este compomente
class Logout extends Component {
    render() {
        return (
            <div>
                Adiós
            </div>
        );
    }
}

export default Logout;