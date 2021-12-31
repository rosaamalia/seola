import React from "react";
import './style.css';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { ImArrowRight2 } from 'react-icons/im';
import { Link } from 'react-router-dom';

function NavigasiBar(){
    return (
        <React.Fragment>
            <Navbar collapseOnSelect fixed="top" expand="lg" variant="dark" className="navbar">
                <Container>
                    <Link to="/" className="logo">Seola</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="" className="link">Home</Link>
                            <Link to="" className="link">About</Link>
                            <Link to="" className="link">Contact Us</Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Link to="" className="link" style={{ 'font-weight':'700' }}>SIGN IN</Link>
                            <Link className="btn" style={{ 'font-weight':'700', 'backgroundColor':'white' }}>
                                JOIN US
                                <ImArrowRight2 className="arrow"></ImArrowRight2>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default NavigasiBar;