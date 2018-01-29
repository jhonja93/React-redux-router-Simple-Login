import React, { Component } from 'react';
import { Row, Col, Preloader } from 'react-materialize';

class PreloaderCircle extends Component {
    render() {
        return (
            <Row className="preloader-row">
                <Col s={12}>
                    <Preloader flashing/>
                </Col>
            </Row>
        );
    }
}

export default PreloaderCircle;