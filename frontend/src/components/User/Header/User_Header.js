import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const header = () => {
    return (
        <div>
            <Navbar bg="primary" expand="lg" variant='dark'>
                <Container>
                    <Navbar.Brand >CarWave</Navbar.Brand>
                    <Navbar.Brand style={{ marginRight: "500px" }} href="/"> HOME PAGE</Navbar.Brand>

                </Container>
            </Navbar>
        </div >
    )
}

export default header
