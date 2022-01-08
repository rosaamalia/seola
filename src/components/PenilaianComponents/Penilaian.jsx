import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Card, Row, Col, Button, Container } from 'react-bootstrap';
import { FiDownload } from 'react-icons/fi';
import { IoStar } from 'react-icons/io5';

function Penilaian() {
    const rating = [];
    
    for(var i=0; i<5; i++) {
        rating.push(<IoStar style={{ color: '#F76761', marginRight: '0.5rem' }}></IoStar>)
    }

    return ( 
        <React.Fragment>
            <Container>
            <Card className="my-5" style={{ width: '100%' }}>
                <Card.Header as={'h5'} className="p-3" style={{ background: '#F9BD67' }}>Informasi Umum</Card.Header>
                <Card.Body>
                    <Row className="px-3 gap-3">
                        <Col className="p-3 kolom-2">
                            <Row>
                                <Col md={4}>
                                    <h6 className="p-2">Nama</h6>
                                    <h6 className="p-2">Modul</h6>
                                    <h6 className="p-2">Tugas</h6>
                                </Col>
                                <Col md={8}>
                                    <h6 className="p-2 isi">Bucky Montana Esmeralda</h6>
                                    <h6 className="p-2 isi">Modul 1: Mengenal Body Painting</h6>
                                    <h6 className="p-2 isi">Perkenalan Body Painting</h6>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="p-3 kolom-2">
                            <Row>
                                <Col md={4}>
                                    <h6 className="p-2">Bidang</h6>
                                    <h6 className="p-2">Tanggal Kumpul</h6>
                                    <h6 className="p-2">Status</h6>
                                </Col>
                                <Col md={8}>
                                    <h6 className="p-2 isi">Seni Lukis</h6>
                                    <h6 className="p-2 isi">Senin 6 September 2021</h6>
                                    <Row md={'auto'} className="p-0 m-0 gap-2">
                                        <h6 className="p-2 isi" style={{ background: '#439946', color: 'white' }}>Disetujui</h6>
                                        <h6 className="p-2 isi">Selasa 7 September 2021</h6>
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
                            <h6 className="p-2 m-0">tugas_modul_1.jpg</h6>
                        </Col>
                        <Col md={'auto'} className="justify-content-start button-selengkapnya">
                            <Button type="submit" className="p-1" style={{ background: 'none', border: 'none', boxShadow: 'none' }}>
                                <FiDownload className="unduh-ikon"/>
                                UNDUH TUGAS
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

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
                                <h6 className="p-2 isi">85 Poin</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2}>
                                <h6 className="p-2">Komentar</h6>
                            </Col>
                            <Col md={10}>
                                <h6 className="p-2 isi">Selamat kamu sudah menyelesaikan Modul I dan dapat melanjutkan ke modul selanjutnya.
                                Warna yang dipilih bagus dan serasi satu sama lain, namun gambar yang dibuat sedikit patah - patah.
                                Tetap semangat!</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2}>
                                <h6 className="p-2">Saran</h6>
                            </Col>
                            <Col md={10}>
                                <h6 className="p-2 isi">Kamu bisa menggunakan kuas yang lebih kecil agar gambar yang dihasilkan lebih halus.</h6>
                            </Col>
                        </Row>
                    </Row>
                    <Row className="mt-3 m-0">
                        <Col md={'auto'} className="justify-content-start button-selengkapnya">
                            <Link to="" className="p-1 link-selengkapnya" style={{ background: 'none', border: 'none', boxShadow: 'none' }}>
                                LANJUT BELAJAR
                            </Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            </Container>
        </React.Fragment>
    );
}

export default Penilaian;