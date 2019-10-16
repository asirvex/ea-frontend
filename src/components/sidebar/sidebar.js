import React, { Component } from 'react';
import { Grid, Col, Row, ListGroup } from 'react-bootstrap';

export default class Sidebar extends Component {
    render() {
        return (
            <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item action href="#link1">
                Active
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                Inactive
                </ListGroup.Item>
                <ListGroup.Item action href="#link3">
                Completed
                </ListGroup.Item>
            </ListGroup>
        )
    }
}
