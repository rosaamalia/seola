import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Card } from 'react-bootstrap';
import ModalImage from 'react-modal-image';
import api from '../../services/api';
import { toast } from "react-toastify";

function PortofolioList() {
    const [portofolio, setPortofolio] = useState([])

    useEffect(() => {
        api.get('/tugas/portofolio')
        .then((res) => {
        setPortofolio(res.data)
        console.log(res.data)
        })
        .catch((err) => {
        console.log(err)
        toast.error(err.response?.data?.message || err)
        })
    }, [])

    return ( 
        <React.Fragment>
            <Card className="mb-5 justify-content-center align-items-center" style={{ width: '100%', height: 'auto', padding: '2rem', textAlign: 'center' }}>
                <h3 className="mb-3 m-md-0 p-0 text-center text-md-start">Portofolio</h3>
                <div className="image-portofolio-container d-none d-md-flex">
                    {portofolio.slice(0, 4).map(({file_tugas}) => {
                        <div>
                        <ModalImage
                            small={file_tugas}
                            medium={file_tugas}
                            large={file_tugas}
                            className="preview-portofolio"/>
                        </div>
                    })}
                </div>
                <div className="profile-button">
                    <Link to="/portofolio" className="profile-link">LIHAT SEMUA PORTOFOLIO</Link>
                </div>
            </Card>
        </React.Fragment>
    );
}

export default PortofolioList;