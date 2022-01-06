import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Card, Row, Col } from 'react-bootstrap';

function PortofolioList() {
    return ( 
        <React.Fragment>
            <Card style={{ width: '100%', height: 'auto', padding: '2rem' }}>
                <h3 className="m-0 p-0 align-self-start">Portofolio</h3>
                <div className="image-portofolio-container">
                    <img className="preview-portofolio" src="https://i.pinimg.com/564x/95/4d/97/954d97097205bcc1bb872889819928eb.jpg"></img>
                    <img className="preview-portofolio" src="https://i.pinimg.com/564x/ab/8a/34/ab8a346cf0051c5431ebcb8779158c1e.jpg"></img>
                    <img className="preview-portofolio" src="https://i.pinimg.com/564x/42/86/58/428658803ed7ef232aea2eb22ab9c5f3.jpg"></img>
                    <img className="preview-portofolio" src="https://i.pinimg.com/564x/80/90/28/809028c982c3e8be24597e55c93a13a6.jpg"></img>
                </div>
                <div className="portofolio-button">
                    <Link to="/portofolio" className="portofolio-link">LIHAT SEMUA PORTOFOLIO</Link>
                </div>
            </Card>
        </React.Fragment>
    );
}

export default PortofolioList;