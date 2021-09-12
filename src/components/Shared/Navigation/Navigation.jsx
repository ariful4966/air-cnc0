import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap'

const Navigation = ({ home }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/"><h2 className="brand_color">Aircnc</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            home &&
                            <>
                                <Nav.Link className="mx-3" href="#home">Host Your Home</Nav.Link>
                                <Nav.Link className="mx-3" href="#experinces">Host Your Experiences</Nav.Link>
                            </>
                        }
                        <Nav.Link className="mx-3" href="#home">Help</Nav.Link>
                        <Nav.Link className="mx-3" href="#link">Login</Nav.Link>
                        <Button className="brand_bg" variant="success"> Sign Up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;