import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Card, Col, ProgressBar } from 'react-bootstrap';

import { DetailModulContext } from "../../context/DetailModulContext";

function ProgresKelas() {
    const { modul }= useContext(DetailModulContext);

    return ( 
        <React.Fragment>
            <Card className="mb-5 justify-content-center align-items-center" style={{ width: '100%', height: 'auto', padding: '2rem' }}>
                <h3 className="m-0 p-0 align-self-start">Progres Kelasku</h3>

                {modul.map((modul) => (
                    <Col className="mt-4" style={{ width: '100%' }}>
                        <p style={{ textAlign: 'left' }}>{modul.modul.nama_modul}</p>
                        <ProgressBar now={modul.progres} label={modul.progres + '%'} />
                    </Col>
                ))}

                <div className="profile-button mt-4">
                    <Link to="/modul" className="profile-link">SELENGKAPNYA</Link>
                </div>
            </Card>
        </React.Fragment>
    );
}

export default ProgresKelas;