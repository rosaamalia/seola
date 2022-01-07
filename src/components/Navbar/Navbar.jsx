import React from "react";
import './style.css';
import { Navbar, Nav, Container } from "react-bootstrap";
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
                        {/* Navbar sebelum login */}
                        <Nav className="me-auto">
                            <Link to="/" className="link">Home</Link>
                            <Link to="/about" className="link">About</Link>
                            <Link to="/contact-us" className="link">Contact Us</Link>
                        </Nav>
                        <Nav>
                            <Link to="/login" className="link" style={{ fontWeight:'700' }}>SIGN IN</Link>
                            <Link to="/register" className="btn" style={{ fontWeight:'700', 'backgroundColor':'white' }}>
                                JOIN US
                                <ImArrowRight2 className="arrow"></ImArrowRight2>
                            </Link>
                        </Nav>

                        {/* Navbar setelah login */}
                        {/* <Nav className="me-auto">
                            <Link to="/dashboard" className="btn" style={{ fontWeight:'700', 'backgroundColor':'white' }}>
                                <FaHome className="home"></FaHome>
                                DASHBOARD
                            </Link>
                        </Nav>
                        <Nav className="d-flex justify-content-center align-items-center">
                            <img className="navbar-profil" src="https://i.pinimg.com/564x/61/2a/76/612a7697020dd20eab0fcdd22e23a1e9.jpg"></img>
                            <NavDropdown title="Bucky Montana Esmeralda" id="collasible-nav-dropdown" align="end">
                                <NavDropdown.Item>
                                    <Link className="link-dropdown" to="/profile">Lihat Profil</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="link-dropdown" to="/">Edit Profil</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="link-dropdown" to="/portofolio">Portofolio</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link className="link-dropdown" to="/signout">Keluar</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default NavigasiBar;