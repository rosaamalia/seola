import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Card, Col, ProgressBar } from 'react-bootstrap';

function ProgresKelas() {
    return ( 
        <React.Fragment>
            <Card className="mb-5 justify-content-center align-items-center" style={{ width: '100%', height: 'auto', padding: '2rem' }}>
                <h3 className="m-0 p-0 align-self-start">Progres Kelasku</h3>
                <Col className="mt-4" style={{ width: '100%' }}>
                    <p style={{ textAlign: 'left' }}>Modul 1: Mengenal Body Painting</p>
                    <ProgressBar now={60} label={'60%'} />
                </Col>
                <Col className="mt-4" style={{ width: '100%' }}>
                    <p style={{ textAlign: 'left' }}>Modul 2: Keberagaman Body Painting</p>
                    <ProgressBar now={0} label={'0%'} />
                </Col>
                <Col className="mt-4" style={{ width: '100%' }}>
                    <p style={{ textAlign: 'left' }}>Modul 3: Practice Your Skill</p>
                    <ProgressBar now={0} label={'0%'} />
                </Col>
                <Col className="mt-4" style={{ width: '100%' }}>
                    <p style={{ textAlign: 'left' }}>Modul 4: </p>
                    <ProgressBar now={0} label={'0%'} />
                </Col>
                <Col className="mt-4" style={{ width: '100%' }}>
                    <p style={{ textAlign: 'left' }}>Modul 5: </p>
                    <ProgressBar now={0} label={'0%'} />
                </Col>
                <Col className="mt-4" style={{ width: '100%' }}>
                    <p style={{ textAlign: 'left' }}>Modul 6: </p>
                    <ProgressBar now={0} label={'0%'} />
                </Col>
                <div className="profile-button mt-4">
                    <Link to="/modul" className="profile-link">SELENGKAPNYA</Link>
                </div>
            </Card>
        </React.Fragment>
    );
}

export default ProgresKelas;