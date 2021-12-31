import React from "react";
import './style.css';
import { Carousel, Card } from "react-bootstrap";

function CarouselLanding(){
    return (
        <React.Fragment>
            <Carousel variant="dark" style={{ width: '100%', paddingInline: '1rem' }}>
                <Carousel.Item>
                    <div className="d-flex flex-row justify-content-center gap-4">
                    <Card className="card" style={{ backgroundColor: '#A6E3F14D', borderColor: '#345CBB' }}>
                        <img className="image" src="http://remedial.id/wp-content/uploads/2018/08/AmySimonyetbali-Foto-350x350.jpg"></img>
                        <Card.Body>
                            <p className="nama">Amy Si Monyet Bali</p>
                            <p className="deskripsi">Amy Zahrawaan, atau biasa disebut Monyetbali. Seorang Perupa yang menekuni beberapa medium berkarya 2 dimensional, diantaranya ilustrasi, komik dan seni grafis murni. Aktif berpameran di beberapa perhelatan baik skala lokal maupun internasional.</p>
                            <p className="deskripsi-pendek">Amy Zahrawaan, atau biasa disebut Monyetbali. Aktif berpameran di beberapa perhelatan baik skala lokal maupun internasional.</p>
                        </Card.Body>
                    </Card>
                    <Card className="card" style={{ backgroundColor: '#F7676133', borderColor: '#F76761' }}>
                        <img className="image" src="http://remedial.id/wp-content/uploads/2018/08/foto-ayenni-350x350.jpg"></img>
                        <Card.Body>
                            <p className="nama">Ayenni Afriyani</p>
                            <p className="deskripsi">Ayenni Afriyani, anak kedua dari tiga bersaudara. Wanita berdarah campuran Betawi dan Jawa ini lahir di Bogor pada 18 April 1998. Memiliki kegemaran belajar filsafat, membaca sastra, esai, dan sejarah populer. Aktif membuat tulisan-tulisan di Lembaga Kajian Mahasiswa UNJ.</p>
                            <p className="deskripsi-pendek">Ayenni Afriyani, wanita berdarah campuran Betawi dan Jawa ini lahir di Bogor pada 18 April 1998. Memiliki kegemaran belajar filsafat, membaca sastra, esai, dan sejarah populer.</p>
                        </Card.Body>
                    </Card>
                    <Card className="card" style={{ backgroundColor: '#F9BD6733', borderColor: '#F9BD67' }}>
                        <img className="image" src="http://remedial.id/wp-content/uploads/2018/08/BAGASBAGOL-350x350.jpg"></img>
                        <Card.Body>
                            <p className="nama">Bagas Bagol</p>
                            <p className="deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p className="deskripsi-pendek">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Card.Body>
                    </Card>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="d-flex flex-row justify-content-center gap-4">
                    <Card className="card" style={{ backgroundColor: '#A6E3F14D', borderColor: '#345CBB' }}>
                        <img className="image" src="http://remedial.id/wp-content/uploads/2018/08/IMG_22331069000315-350x350.jpeg"></img>
                        <Card.Body>
                            <p className="nama">Latief</p>
                            <p className="deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p className="deskripsi-pendek">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Card.Body>
                    </Card>
                    <Card className="card" style={{ backgroundColor: '#F7676133', borderColor: '#F76761' }}>
                        <img className="image" src="https://picsum.photos/200"></img>
                        <Card.Body>
                            <p className="nama">Miguel Angelo Jonathan</p>
                            <p className="deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p className="deskripsi-pendek">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Card.Body>
                    </Card>
                    <Card className="card" style={{ backgroundColor: '#F9BD6733', borderColor: '#F9BD67' }}>
                        <img className="image" src="https://picsum.photos/201"></img>
                        <Card.Body>
                            <p className="nama">Rianto</p>
                            <p className="deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p className="deskripsi-pendek">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Card.Body>
                    </Card>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="d-flex flex-row justify-content-center gap-4">
                    <Card className="card" style={{ backgroundColor: '#A6E3F14D', borderColor: '#345CBB' }}>
                        <img className="image" src="http://remedial.id/wp-content/uploads/2018/08/WACILWAHYUDI-350x350.jpg"></img>
                        <Card.Body>
                            <p className="nama">Wahyudi</p>
                            <p className="deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p className="deskripsi-pendek">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Card.Body>
                    </Card>
                    </div>
                </Carousel.Item>
            </Carousel>
        </React.Fragment>
    )
}

export default CarouselLanding;