import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './style.css';
import { Card, Row, Col, Button, Container } from 'react-bootstrap';
import { FiDownload } from 'react-icons/fi';
import { IoStar } from 'react-icons/io5';
import { toast } from 'react-toastify';
import ModalImage from 'react-modal-image';

import AuthContext from '../../context/AuthContext';
import api from '../../services/api';

function Penilaian() {
    const { loggedIn } = useContext(AuthContext);
    const { id } = useParams();
    const [tugas, setTugas] = useState('');
    const [error, setError] = useState(true);

    async function getTugas() {
        try {
            const res = await api.get(`/tugas/modul/${id}`)

            setTugas(res.data)
            setError(false)
            console.log(res.data)
        } catch (err) {
            console.log(err)
            toast.error(err.response?.data?.message || err)
        }
    }

    useEffect(() => {
        getTugas()
    }, [])
    
    const rating = [];
    
    for(var i=0; i<tugas.rating; i++) {
        rating.push(<IoStar style={{ color: '#F76761', marginRight: '0.5rem' }}></IoStar>)
    }

    console.log(tugas)

    return ( 
        <React.Fragment>
            <Container>
            {error===false
            ?
            <>
            <Card className="my-5" style={{ width: '100%' }}>
                <Card.Header as={'h5'} className="p-3" style={{ background: '#F9BD67' }}>Informasi Umum</Card.Header>
                <Card.Body>
                    <Row className="px-3 d-flex flex-column flex-md-row gap-3">
                        <Col className="p-3 kolom-2">
                                <Row>
                                    <Col md={4}>
                                        <h6 className="p-2">Nama</h6>
                                    </Col>
                                    <Col md={8}>
                                        <h6 className="p-2 isi">{loggedIn.data.nama_depan + " " + loggedIn.data.nama_belakang}</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <h6 className="p-2">Modul</h6>
                                    </Col>
                                    <Col md={8}>
                                        <h6 className="p-2 isi">{tugas.modul.nama_modul}</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <h6 className="p-2">Tugas</h6>
                                    </Col>
                                    <Col md={8}>
                                        <h6 className="p-2 isi">{tugas.modul.nama_modul}</h6>
                                    </Col>
                                </Row>
                        </Col>
                        <Col className="p-3 kolom-2">
                                <Row>
                                    <Col md={4}>
                                        <h6 className="p-2">Bidang</h6>
                                    </Col>
                                    <Col md={8}>
                                        <h6 className="p-2 isi">{loggedIn.data.bidang_seni}</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <h6 className="p-2">Tanggal Kumpul</h6>
                                    </Col>
                                    <Col md={8}>
                                        <h6 className="p-2 isi">{tugas.tanggal_kumpul}</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <h6 className="p-2">Status</h6>
                                    </Col>
                                    <Col md={8}>
                                        <Row md={'auto'} className="row-auto p-0 m-0 gap-2">
                                            {tugas.status=='Disetujui'
                                            ?
                                            <>
                                            <h6 className="p-2 isi" style={{ background: '#439946', color: 'white' }}>Disetujui</h6>
                                            <h6 className="p-2 isi">{tugas.tanggal_nilai}</h6>
                                            </>
                                            :
                                            <h6 className="p-2 isi" style={{ background: '#dd4949', color: 'white' }}>Belum dinilai</h6>
                                            }
                                        </Row>
                                    </Col>
                                </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <Card className="mb-5" style={{ width: '100%' }}>
                <Card.Header as={'h5'} className="p-3" style={{ background: '#F9BD67' }}>Tugas Terkumpul</Card.Header>
                <Card.Body className="mx-3 px-0">
                    <Row className="p-3 m-0 gap-3 kolom-2 align-items-center" style={{ width: '100%' }}>
                        <Col md={'auto'}>
                            <ModalImage small={tugas.file_tugas} medium={tugas.file_tugas} large={tugas.file_tugas} className="porto my-2"/>
                        </Col>
                        <Col className="col-auto justify-content-start button-selengkapnya">
                            <a href={tugas.file_tugas} target="_blank">
                            <Button type="submit" className="p-1" style={{ background: 'none', border: 'none', boxShadow: 'none' }}>
                                <FiDownload className="unduh-ikon"/>
                                UNDUH TUGAS
                            </Button>
                            </a>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            
            {tugas.rating
            ?
            <Card className="mb-5" style={{ width: '100%' }}>
                <Card.Header as={'h5'} className="p-3" style={{ background: '#F9BD67' }}>Feedback</Card.Header>
                <Card.Body className="mx-3 px-0">
                    <Row className="p-3 m-0 kolom-2 align-items-center" style={{ width: '100%' }}>
                        <Row className="mb-0">
                            <Col md={2}>
                                <h6 className="p-2">Rating</h6>
                            </Col>
                            <Col>
                                <h6 className="p-2">{rating}</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2}>
                                <h6 className="p-2">Poin</h6>
                            </Col>
                            <Col md={'auto'}>
                                <h6 className="p-2 isi">{tugas.poin}</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2}>
                                <h6 className="p-2">Komentar</h6>
                            </Col>
                            <Col md={10}>
                                <h6 className="p-2 isi">{tugas.komentar}</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2}>
                                <h6 className="p-2">Saran</h6>
                            </Col>
                            <Col md={10}>
                                <h6 className="p-2 isi">{tugas.saran}</h6>
                            </Col>
                        </Row>
                    </Row>
                    <Row className="mt-3 m-0">
                        <Col className="col-auto justify-content-start button-selengkapnya">
                            <Link to="/modul" className="p-1 link-selengkapnya" style={{ background: 'none', border: 'none', boxShadow: 'none' }}>
                                LANJUT BELAJAR
                            </Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            :
            <Row className="mb-5 m-0">
                <Col className="col-auto justify-content-start button-selengkapnya">
                    <Link to="/modul" className="p-1 link-selengkapnya" style={{ background: 'none', border: 'none', boxShadow: 'none' }}>
                        LANJUT BELAJAR
                    </Link>
                </Col>
            </Row>
            }
            </>
            :
            <p>Mengambil data</p>
            }

            </Container>
        </React.Fragment>
    );
}

export default Penilaian;