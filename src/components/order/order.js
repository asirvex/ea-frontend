import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export default class Order extends Component {
  render() {
    return (
      <div>
        <Card>
            <Card.Header>Order Title</Card.Header>
            <Card.Body>
            <p>This is some card shit</p>
            </Card.Body>
            <Card.Footer>
                Simple text
            </Card.Footer>
        </Card>
      </div>
    )
  }
}
