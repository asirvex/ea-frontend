import React, { Component } from 'react'
import { Container, Row, Col, ListGroup, Card, Nav, Button } from "react-bootstrap";
import Sidebar from '../sidebar/sidebar';
import Order from '../order/order';
import Navbar from '../navigation/navigationBar';
import './homepage.css'

export default class HomePage extends Component {
  render() {
    return (
        <div >
        <Navbar />
        <Container className="main-content">
        <Card>
        <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#orders">
            <Nav.Item>
                <Nav.Link href="#first">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#orders">Orders</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#profile">
                My Profile
                </Nav.Link>
            </Nav.Item>
            </Nav>
        </Card.Header>
        <Card.Body>
        <Row fluid={true}>
                <Col lg={3} style={{ marginLeft: 0, marginRight: 0,}}>
                <Sidebar />
                </Col>
                <Col lg={9}>
                <ListGroup>
                    <ListGroup.Item>
                        <Order/>
                    </ListGroup.Item>
                    
                </ListGroup>
                </Col>
            </Row>
        </Card.Body>
        </Card>
        </Container>
        </div>
    )
  }
}
