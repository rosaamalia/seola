import React from "react";
import './style.css';
import { Row, Col, Card } from "react-bootstrap";
import { FaItunesNote } from 'react-icons/fa';
import image from '../../images/image.png';

function CardKelas(){
    return (
        <React.Fragment>
            <Row style={{ width: '100%' }} className="row-kelas">
                <Col className="d-flex flex-wrap justify-content-start col-lg-7 col-md-12 gap-4">
                    <div className="card-container">
                        <div className="ikon" style={{ color: '#345CBB' }}>
                            <FaItunesNote></FaItunesNote>
                        </div>
                        <Card className="card-kelas" style={{ backgroundColor: '#345CBB' }}>
                            <Card.Body >
                                <h5>Musik</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </Card.Body>
                        </Card>
                    </div>
                    
                    <div className="card-container">
                        <div className="ikon" style={{ color: '#345CBB' }}>
                            <FaItunesNote></FaItunesNote>
                        </div>
                        <Card className="card-kelas" style={{ backgroundColor: '#345CBB' }}>
                            <Card.Body >
                                <h5>Musik</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="card-container">
                        <div className="ikon" style={{ color: '#345CBB' }}>
                            <FaItunesNote></FaItunesNote>
                        </div>
                        <Card className="card-kelas" style={{ backgroundColor: '#345CBB' }}>
                            <Card.Body >
                                <h5>Musik</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="card-container">
                        <div className="ikon" style={{ color: '#345CBB' }}>
                            <FaItunesNote></FaItunesNote>
                        </div>
                        <Card className="card-kelas" style={{ backgroundColor: '#345CBB' }}>
                            <Card.Body >
                                <h5>Musik</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col className="d-flex flex-column col-lg-4 col-md-12">
                    <div>
                        <h1>Skills and Passions</h1>
                        <p>Anyone can be ✨<span style={{ fontWeight: '700' }}>Anything</span>✨</p>
                    </div>
                    <img src={image} style={{ width: '100%', borderRadius: '3%' }}></img>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default CardKelas;