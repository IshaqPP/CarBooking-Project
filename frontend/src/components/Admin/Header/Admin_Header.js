import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const header = () => {
    return (
        <div>
            <Navbar bg="primary" expand="lg" variant='dark'>
                <Container>
                    <Navbar.Brand >CarWave</Navbar.Brand>
                    <Navbar.Brand style={{ marginLeft: "400px" }} href="/Admin/AdminHome"> ADMIN PANEL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav >
                            <NavDropdown title="Ishaq " id="basic-nav-dropdown" style={{ marginLeft: "400px", fontSize: "20px" }}>
                                <NavDropdown.Item href="/Admin/OrderDetails">Order Details</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Export to CSV</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}

export default header
