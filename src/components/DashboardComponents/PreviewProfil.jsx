import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Card, Row, Col, ProgressBar } from 'react-bootstrap';
import { IoRibbon, IoStar } from 'react-icons/io5';

function PreviewProfil() {
    return ( 
        <React.Fragment>
            <Card className="mb-5 p-4 d-flex align-items-between flex-row" style={{ width: '90%', height: 'auto' }}>
                <Col>
                    <Row className="justify-content-center align-items-center">
                        <Col md={3}>
                            <img className="dashboard-profile" src="https://i.pinimg.com/564x/61/2a/76/612a7697020dd20eab0fcdd22e23a1e9.jpg"/>
                        </Col>
                        <Col md={9} style={{ textAlign: 'left' }}>
                            <h5>Bucky Montana Esmeralda</h5>
                            <span>buckymontas@mail.com</span>
                        </Col>
                    </Row>
                    <Row className="my-4 justify-content-center gap-2">
                        <div className="bidang-seni col-5 gap-1">
                            <IoRibbon></IoRibbon>
                            <span>Seni Lukis</span>
                        </div>
                        <div className="oranye-bg col-5 gap-1">
                            <IoStar style={{ color: '#F76761' }}></IoStar>
                            <span>0 Point</span>
                        </div>
                        <div className="oranye-bg col-5 gap-1">
                            <span>Ranking: -</span>
                        </div>
                    </Row>
                    <Row>
                        <Link className="link-abu" to="/profile">LIHAT PROFIL SELENGKAPNYA</Link>
                    </Row>
                </Col>
            </Card>
        </React.Fragment>
    );
}

export default PreviewProfil;