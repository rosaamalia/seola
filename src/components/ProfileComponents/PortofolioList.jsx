import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Card } from 'react-bootstrap';
import ModalImage from 'react-modal-image';

function PortofolioList() {
    return ( 
        <React.Fragment>
            <Card className="mb-5 justify-content-center align-items-center" style={{ width: '100%', height: 'auto', padding: '2rem', textAlign: 'center' }}>
                <h3 className="mb-3 m-md-0 p-0 text-center text-md-start">Portofolio</h3>
                <div className="image-portofolio-container d-none d-md-flex">
                    <div>
                    <ModalImage
                        small="https://i.pinimg.com/564x/95/4d/97/954d97097205bcc1bb872889819928eb.jpg"
                        medium="https://i.pinimg.com/564x/95/4d/97/954d97097205bcc1bb872889819928eb.jpg"
                        large="https://i.pinimg.com/564x/95/4d/97/954d97097205bcc1bb872889819928eb.jpg"
                        className="preview-portofolio"/>
                    </div>
                    <div>
                    <ModalImage
                        small="https://i.pinimg.com/564x/ab/8a/34/ab8a346cf0051c5431ebcb8779158c1e.jpg"
                        medium="https://i.pinimg.com/564x/ab/8a/34/ab8a346cf0051c5431ebcb8779158c1e.jpg"
                        large="https://i.pinimg.com/564x/ab/8a/34/ab8a346cf0051c5431ebcb8779158c1e.jpg"
                        className="preview-portofolio"/>
                    </div>
                    <div>
                    <ModalImage
                        small="https://i.pinimg.com/564x/42/86/58/428658803ed7ef232aea2eb22ab9c5f3.jpg"
                        medium="https://i.pinimg.com/564x/42/86/58/428658803ed7ef232aea2eb22ab9c5f3.jpg"
                        large="https://i.pinimg.com/564x/42/86/58/428658803ed7ef232aea2eb22ab9c5f3.jpg"
                        className="preview-portofolio"/>
                    </div>
                    <div>
                    <ModalImage
                        small="https://i.pinimg.com/564x/80/90/28/809028c982c3e8be24597e55c93a13a6.jpg"
                        medium="https://i.pinimg.com/564x/80/90/28/809028c982c3e8be24597e55c93a13a6.jpg"
                        large="https://i.pinimg.com/564x/80/90/28/809028c982c3e8be24597e55c93a13a6.jpg"
                        className="preview-portofolio"/>
                    </div>
                </div>
                <div className="profile-button">
                    <Link to="/portofolio" className="profile-link">LIHAT SEMUA PORTOFOLIO</Link>
                </div>
            </Card>
        </React.Fragment>
    );
}

export default PortofolioList;