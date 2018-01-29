import React, { Component } from 'react';

class Content extends Component {
    render() {
        const { body } = this.props;

        return (
            <div className="Content">
                {/* Renderizamos el contenido del container proporcionado por AppRoutes */}
                {body}
            </div>
        );
    }
}

export default Content;