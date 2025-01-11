import React from 'react'
import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <Nav variant="pills" defaultActiveKey="/home" style={{ backgroundColor: "black", padding: "1rem" }}>
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Service</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Contact</Nav.Link>
      </Nav.Item>
       <Nav.Item>
        <Nav.Link eventKey="link-4">Feedback</Nav.Link>
      </Nav.Item>   
    </Nav>
  )
}

export default Navbar;