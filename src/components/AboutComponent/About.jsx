import React from "react";
import './style.css';
import image from '../../images/about-us.png'
import { Link } from 'react-router-dom';
import { IoIosBasket } from "react-icons/io";
import { SiBookstack } from 'react-icons/si';
import { FaBrush } from 'react-icons/fa';
import { BsChatSquareQuoteFill } from 'react-icons/bs';
import { Row, Col, Carousel } from "react-bootstrap";

function About(){
    return (
        <React.Fragment>
            <h1 className="pt-5 mt-5">About Us</h1>
            <div className="mx-5 about-deskripsi">
                <p>Remedial merupakan kegiatan yang berfokus pada pola konsumsi informasi dan pengetahuan berdasarkan perkembangan hari ini. Dengan metode saling silang informasi yang menghasilkan pengetahuan dan pendekatan seni dan literasi.</p>
            </div>

            <div className="about-photo-container row-photo">
            <img className="about-photo-icon d-none d-sm-block" src={image}/>
            <Row className="p-5 mt-5 d-none d-sm-flex" style={{ width: '100%' }}>
                <Col className="col-md-3 col-odd" style={{ display: 'relative' }}>
                    <img src="http://remedial.id/wp-content/uploads/2018/09/Danti-foto.jpg"></img>
                </Col>
                <Col className="col-md-3 col-even">
                    <img src="http://remedial.id/wp-content/uploads/2019/03/aa2622ea-3945-4412-9849-6e21c08b9482.jpg"></img>
                </Col>
                <Col className="col-md-3 col-odd">
                    <img src="http://remedial.id/wp-content/uploads/2019/03/IMG_7726-600x400.jpg"></img>
                </Col>
                <Col className="col-md-3 col-even">
                    <img src="http://remedial.id/wp-content/uploads/2019/03/IMG_7724-1024x683.jpg"></img>
                </Col>
            </Row>

            <Carousel className="d-block d-sm-none" variant="dark" style={{ paddingInline: '4rem' }}>
                <Carousel.Item>
                    <img style={{ width: '100%', height:'25rem', borderRadius: '10px', objectFit: 'cover', marginBottom: '3rem' }} src="http://remedial.id/wp-content/uploads/2019/03/IMG_7724-1024x683.jpg"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ width: '100%', height:'25rem', borderRadius: '10px', objectFit: 'cover', marginBottom: '3rem' }} src="http://remedial.id/wp-content/uploads/2018/09/Danti-foto.jpg"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ width: '100%', height:'25rem', borderRadius: '10px', objectFit: 'cover', marginBottom: '3rem' }} src="http://remedial.id/wp-content/uploads/2019/03/aa2622ea-3945-4412-9849-6e21c08b9482.jpg"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ width: '100%', height:'25rem', borderRadius: '10px', objectFit: 'cover', marginBottom: '3rem' }} src="http://remedial.id/wp-content/uploads/2019/03/IMG_7726-600x400.jpg"></img>
                </Carousel.Item>
            </Carousel>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave" style={{ bottom: '0%'}}>
                <path fill="#A7E3F34D" fill-opacity="1" d="M0,64L48,53.3C96,43,192,21,288,48C384,75,480,149,576,181.3C672,213,768,203,864,181.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            </div>

            <Row className="d-flex flex-wrap justify-content-end align-items-center" style={{ background: '#A7E3F34D', width: '100%', paddingTop: '10vh' }}>
                <Col className="col-12 col-sm-2 d-flex justify-content-center justify-content-sm-end align-items-center">
                    <h1>Tujuan Kegiatan</h1>
                </Col>
                <Col className="col-12 col-sm-8 p-5">
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
            
            <div className="d-flex justify-content-center align-items-center" style={{ position: 'relative', width: '100%' }}>
            <Col md={12} className="pb-5 justify-content-center" style={{ paddingTop: '20vh', width: '100%' }}>
                <Row className="pb-5 m-0">
                    <h1 style={{ textAlign: 'center' }}>Metode Pembelajaran</h1>
                </Row>
                <Row className="gap-4 m-0 justify-content-center align-items-start">
                    <Col md={2} className="col-8 metode gap-2" style={{ border: '1px solid #345CBB' }}>
                        <div className="metode-ikon" style={{ background: '#A6E3F14D', color: '#345CBB'}}>
                            <IoIosBasket></IoIosBasket>
                        </div>
                        <h3 className="p-0 m-0">Ekskursi</h3>
                        <span style={{ textAlign: 'center' }}>perjalanan untuk bersenang-senang; piknik; darmawisata</span>
                    </Col>
                    <Col md={2} className="col-8 metode gap-2" style={{ border: '1px solid #F76761' }}>
                        <div className="metode-ikon" style={{ background: '#F7676133', color: '#F76761'}}>
                            <SiBookstack></SiBookstack>
                        </div>
                        <h3 className="p-0 m-0">Materi</h3>
                        <span style={{ textAlign: 'center' }}>sesuatu yang menjadi bahan (untuk diujikan, dipikirkan, dibicarakan, dikarangkan, dan sebagainya)</span>
                    </Col>
                    <Col md={2} className="col-8 metode gap-2" style={{ border: '1px solid #F9BD67' }}>
                        <div className="metode-ikon" style={{ background: '#F9BD6733', color: '#F9BD67'}}>
                            <FaBrush></FaBrush>
                        </div>
                        <h3 className="p-0 m-0">Kreasi</h3>
                        <span style={{ textAlign: 'center' }}>hasil daya cipta; hasil daya khayal (penyair, komponis, pelukis, dan sebagainya)</span>
                    </Col>
                    <Col md={2} className="col-8 metode gap-2" style={{ border: '1px solid #94435C' }}>
                        <div className="metode-ikon" style={{ background: '#94435C4D', color: '#94435C'}}>
                            <BsChatSquareQuoteFill></BsChatSquareQuoteFill>
                        </div>
                        <h3 className="p-0 m-0">Diskusi</h3>
                        <span style={{ textAlign: 'center' }}>pertemuan ilmiah untuk bertukar pikiran mengenai suatu masalah</span>
                    </Col>
                </Row>
            </Col>

            <svg className="wave" style={{ top: '0%'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#A7E3F34D" fill-opacity="1" d="M0,256L80,224C160,192,320,128,480,128C640,128,800,192,960,202.7C1120,213,1280,171,1360,149.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>
            </div>

            <Row className="px-5 pb-5 mb-5 justify-content-center align-items-center gap-4" style={{ width: '100%', paddingTop: '15vh' }}>
                <Col className="col-12 col-sm-10 col-md-3 justify-content-center align-items-center">
                    <img className="photo-narasumber" src="http://remedial.id/wp-content/uploads/2018/09/IMG-20171214-WA0003.jpg"></img>
                </Col>
                <Col className="col-12 col-sm-10 col-md-5">
                    <h1>Narasumber</h1>
                    <p>Dalam kegiatan ini diisi oleh beberapa narasumber profesional di bidangnya masing-masing, seperti seniman, musisi, desainer, komunitas kesenian, sastrawan, sejarawan hingga peneliti. Mereka sudah lama berpraktik di dunia kesenian dan kebudayaan. Prestasi yang didapatkan hingga tingkat internasional.</p>
                    <div className="button-selengkapnya">
                        <Link to="#" className="link-selengkapnya">HUBUNGI KAMI</Link>
                    </div>
                </Col>
            </Row>

            <div className="about-deskripsi m-5 text-start text-sm-center">
                <p>Remedial adalah cara Serrum untuk berkomunikasi dengan murid SMA hari ini dengan metode seni rupa dan literasi. Dengan proses berdiskusi, berkreasi dan berapresiasi.</p>
            </div>
        </React.Fragment>
    )
}

export default About;