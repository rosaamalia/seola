import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Card, Row, Col, ProgressBar } from 'react-bootstrap';
import { IoRibbon, IoStar } from 'react-icons/io5';

import AuthContext from '../../context/AuthContext';

function PreviewProfil() {
    const { loggedIn } = useContext(AuthContext);

    return ( 
        <React.Fragment>
            <Card className="mb-5 p-4 d-flex justify-content-center align-items-between flex-row" style={{ width: '100%', height: 'auto', textAlign: 'center' }}>
                <Col>
                    <Row className="justify-content-center align-items-center">
                        <Col md={3}>
                            <img className="dashboard-profile" src={loggedIn.data.foto_profil}/>
                        </Col>
                        <Col md={9} style={{ textAlign: 'left' }}>
                            <h5>{loggedIn.data.nama_depan + " " + loggedIn.data.nama_belakang}</h5>
                            <span>{loggedIn.data.email}</span>
                        </Col>
                    </Row>
                    <Row className="my-4 justify-content-center gap-2">
                        <div className="bidang-seni col-5 gap-1">
                            <IoRibbon></IoRibbon>
                            <span>{loggedIn.data.bidang_seni}</span>
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