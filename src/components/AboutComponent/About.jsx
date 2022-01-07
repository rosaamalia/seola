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

            <Row className="p-5" style={{ width: '100%' }}>
                <Col className="col-3 col-odd" style={{ display: 'relative' }}>
                    <img src="http://serrum.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-02-16-at-12.08.27.jpeg"></img>
                </Col>
                <Col className="col-3 col-even">
                    <img src="http://remedial.id/wp-content/uploads/2019/03/aa2622ea-3945-4412-9849-6e21c08b9482.jpg"></img>
                </Col>
                <Col className="col-3 col-odd">
                    <img src="http://remedial.id/wp-content/uploads/2019/03/IMG_7726-600x400.jpg"></img>
                </Col>
                <Col className="col-3 col-even">
                    <img src="http://serrum.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-02-23-at-10.29.26.jpeg"></img>
                </Col>
            </Row>

            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave">
                <path fill="#FFEFEB" fill-opacity="1" d="M0,224L60,229.3C120,235,240,245,360,218.7C480,192,600,128,720,90.7C840,53,960,43,1080,64C1200,85,1320,139,1380,165.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>

            <Row className="p-5 d-flex justify-content-end align-items-center" style={{ backgroundColor: '#FFEFEB' }}>
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

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave" style={{ top: '170vh' }}>
                <path fill="#FFEFEB" fill-opacity="1" d="M0,160L80,138.7C160,117,320,75,480,74.7C640,75,800,117,960,128C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>

            <Row className="pb-5 px-5" style={{ paddingTop: '25vh' }}>
                <Row className="pb-5">
                    <h1 style={{ textAlign: 'center' }}>Metode Pembelajaran</h1>
                </Row>
                <Row className="gap-4">
                    <Col className="metode">
                        <IoIosBasket></IoIosBasket>
                        <h3>Ekskursi</p>
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