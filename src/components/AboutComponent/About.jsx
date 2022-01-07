import React from "react";
import './style.css';
import { FaItunesNote, FaPaintBrush, FaPalette, FaAtom } from "react-icons/fa";
import { IoIosBasket } from "react-icons/io";
import { Container, Row, Col } from "react-bootstrap";

function About(){
    return (
        <React.Fragment>
            <h1 className="pt-5">About Us</h1>
            <div className="about-deskripsi">
                <p>Remedial merupakan kegiatan yang berfokus pada pola konsumsi informasi dan pengetahuan berdasarkan perkembangan hari ini. Dengan metode saling silang informasi yang menghasilkan pengetahuan dan pendekatan seni dan literasi.</p>
            </div>

            <div className="about-photo-container">
            <Row className="p-5" style={{ width: '100%' }}>
                <Col className="col-3 col-odd" style={{ display: 'relative' }}>
                    <img src="http://remedial.id/wp-content/uploads/2018/09/Danti-foto.jpg"></img>
                </Col>
                <Col className="col-3 col-even">
                    <img src="http://remedial.id/wp-content/uploads/2019/03/aa2622ea-3945-4412-9849-6e21c08b9482.jpg"></img>
                </Col>
                <Col className="col-3 col-odd">
                    <img src="http://remedial.id/wp-content/uploads/2019/03/IMG_7726-600x400.jpg"></img>
                </Col>
                <Col className="col-3 col-even">
                    <img src="http://remedial.id/wp-content/uploads/2019/03/IMG_7724-1024x683.jpg"></img>
                </Col>
            </Row>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave">
                <path fill="#A7E3F34D" fill-opacity="1" d="M0,64L48,53.3C96,43,192,21,288,48C384,75,480,149,576,181.3C672,213,768,203,864,181.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            </div>


            <Row className="p-5 d-flex justify-content-end align-items-center" style={{ background: '#A7E3F34D', width: '100%' }}>
                <Col className="col-lg-2 d-flex justify-content-end align-items-center">
                    <h1>Tujuan Kegiatan</h1>
                </Col>
                <Col className="col-lg-8">
                    <ul>
                        <li>Menggembangkan minat murid sesuai kemampuannya yang dimiliki.</li>
                        <li>Pengetahuan tambahan di luar kegiatan belajar mengajar di Sekolah.</li>
                        <li>Mengapresiasi proses berkarya murid sesuai minat dan kemampuannya.</li>
                        <li>Mengajak untuk menggembangkan minat baca, tidak hanya yang bersifat literasi namun kondisi dan situasi hari ini.</li>
                        <li>Mengenalkan perkembangan seni khususnya seni rupa hari ini.</li>
                        <li>Mengenal dan mengkritisi lebih jauh karakter diri melalui pola konsumsi.</li>
                        <li>Mencoba memformulasikan</li>
                    </ul>
                </Col>
            </Row>

            <Row className="pb-5 px-5" style={{ paddingTop: '25vh' }}>
                <Row className="pb-5">
                    <h1 style={{ textAlign: 'center' }}>Metode Pembelajaran</h1>
                </Row>
                <Row className="gap-4">
                    <Col className="metode">
                        <IoIosBasket></IoIosBasket>
                        <h3>Ekskursi</h3>
                    </Col>
                    <Col className="metode">
                        <h3>Ekskursi</h3>
                    </Col>
                    <Col className="metode">
                        <h3>Ekskursi</h3>
                    </Col>
                    <Col className="metode">
                        <h3>Ekskursi</h3>
                    </Col>
                </Row>
            </Row>
        </React.Fragment>
    )
}

export default About;