import React from "react";
import './style.css';
import { Row, Col, Container } from "react-bootstrap";
import { ImArrowRight2 } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function Footer(){
    return (
        <React.Fragment>
            <Container className="background" fluid>
                <Row className="row-column">
                    <Col className="col-margin-left">
                        <Link to="/" className="logo-footer">Seola</Link>
                        <p>4, RT.4/RW.4, Jagakarsa, South Jakarta City, Jakarta 12620</p>
                    </Col>
                    <Col className="col-margin-right">
                        <Row>
                            <Col className="d-flex flex-column">
                            <span className="judul">AYO BERGABUNG!</span>
                            <Link className="btn" style={{ 'fontWeight':'700', 'backgroundColor':'white', 'fontSize':'0.7rem', 'width':'50%' }}>
                                JOIN US
                                <ImArrowRight2 className="arrow"></ImArrowRight2>
                            </Link>
                            </Col>

                            <Col xs={3} className="d-flex flex-column">
                            <span className="judul">KELAS</span>
                            <span>Seni Rupa</span>
                            <span>Seni Tari</span>
                            <span>Seni Musik</span>
                            <span>Seni Lukis</span>
                            <span>Sastra</span>
                            </Col>

                            <Col>
                                <Col className="d-flex flex-column">
                                <p className="judul">QUICK LINK</p>
                                <Link className="quick-link">About</Link>
                                <Link className="quick-link">Contact Us</Link>
                                </Col>

                                <Col className="d-flex flex-column">
                                <p className="judul">HUBUNGI KAMI</p>
                                <span>
                                    <BsFillTelephoneFill style={{ 'marginRight':'0.5rem' }}/>
                                    (021) 29517702
                                </span>
                                <span>
                                    <RiInstagramFill style={{ 'marginRight':'0.5rem' }}/>
                                    @remedial_s
                                </span>
                                </Col>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Footer;