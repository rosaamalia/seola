import React, { useState, useContext} from "react";
import './style.css';
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { ImArrowRight2 } from 'react-icons/im';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/AuthContext';
import api from '../../services/api';

function NavigasiBar(){
    const { loggedIn, setLoggedIn } = useContext(AuthContext);

    function logout() {
        api.post('/auth/logout')
        .then((res) => {
            console.log(res.data)

            setLoggedIn({ isLoggedIn: false});
            localStorage.removeItem("token");
            api.defaults.headers.common["Authorization"] = undefined;
            window.location.replace('/')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <React.Fragment>
            <Navbar collapseOnSelect fixed="top" expand="lg" variant="dark" className="navbar">
                <Container>
                    <Link to="/" className="logo">Seola</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            {
                                loggedIn.isLoggedIn===false ?
                                <Navbar.Collapse id="responsive-navbar-nav">
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
                                </Navbar.Collapse>
                                :
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto">
                                        <Link to="/dashboard" className="btn" style={{ fontWeight:'700', 'backgroundColor':'white' }}>
                                            <FaHome className="home"></FaHome>
                                            DASHBOARD
                                        </Link>
                                    </Nav>
                                    <Nav className="d-flex justify-content-center align-items-center">
                                        <img className="navbar-profil" src={loggedIn.data.foto_profil}></img>
                                        <NavDropdown title={loggedIn.data.nama_depan + " " + loggedIn.data.nama_belakang} id="collasible-nav-dropdown" align="end" className="p-0 m-0 ms-2">
                                            <NavDropdown.Item as={Link} to="/profile">
                                                Lihat Profil
                                            </NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/editprofile">
                                                Edit Profil
                                            </NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/portofolio">
                                                Portofolio
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item>
                                                <button onClick={logout} style={{ border: 'none', background: 'none', width: '100%', textAlign: 'left' }}>Keluar</button>
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            }  
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default NavigasiBar;