import React from "react";
import { Container, Row ,Col, Form, Button, Card } from "react-bootstrap";
import editprofile from "./gambar/editprofile.png";
import './style.css';

function EditProfile(){
    return (
        <Container className="py-5">
            <Row>
                <Form>
                    <Row>
                        <Col>
                            <Row className="mt-4 py-1 justify-content-start align-items-center">
                                <Col md={'auto'}>
                                <img className="photo-profile" src="https://i.pinimg.com/564x/61/2a/76/612a7697020dd20eab0fcdd22e23a1e9.jpg"></img>
                                </Col>
                                <Col md={'auto'} className="justify-content-start button-selengkapnya">
                                <Button type="submit" className="p-1" style={{ background: 'none', border: 'none', boxShadow: 'none' }}>UNGGAH FOTO PROFIL</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Form.Group className="col-md-6 my-4" controlId="namadepan">
                                    <Form.Label>Nama Depan</Form.Label>
                                    <Form.Control className="px-4" type="text" placeholder="Tulis nama depan" style={{borderRadius: 30, textAlign: "left"}} />
                                </Form.Group>
                                <Form.Group className="col-md-6 my-4" controlId="namabelakang">
                                    <Form.Label>Nama Belakang</Form.Label>
                                    <Form.Control className="px-4" type="text" placeholder="Tulis nama belakang"style={{borderRadius: 30, textAlign: "left"}} />
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-4 col-md-12" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="px-4" type="password" placeholder="Password" style={{borderRadius: 30, textAlign: "left"}} />
                            </Form.Group>
                            <Form.Group className="mb-4 col-md-12" controlId="notelp">
                                <Form.Label>No. Telp</Form.Label>
                                <Form.Control className="px-4" type="text" placeholder="Tulis nomor telepon" style={{borderRadius: 30, textAlign: "left"}} />
                            </Form.Group>
                            <Form.Group className="mb-4 col-md-12" controlId="Alamat">
                                <Form.Label>Alamat</Form.Label>
                                <Form.Control className="px-4" type="text" placeholder="Tulis alamat domisili" style={{borderRadius: 30, textAlign: "left"}}/>
                            </Form.Group>
                            <Form.Group className="mb-4 col-md-12" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control className="px-4" type="email" placeholder="Tulis email" style={{borderRadius: 30, textAlign: "left"}}/>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-4 col-md-12" controlId="sekolah">
                                <Form.Label>Sekolah</Form.Label>
                                <Form.Control className="px-4" type="text" placeholder="Tulis nama sekolah" style={{borderRadius: 30, textAlign: "left"}}/>
                            </Form.Group>
                            <Form.Group className="mb-4 col-md-12" controlId="jeniskelamin">
                                <Form.Label>Jenis Kelamin</Form.Label>
                                <Form.Select aria-label="Jenis Kelamin" className="px-4" type="text" placeholder="Jenis kelamin" style={{borderRadius: 30, textAlign: "left"}}>
                                    <option value="1">Laki - laki</option>
                                    <option value="2">Perempuan</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-4 col-md-12" controlId="tanggallahir">
                                <Form.Label>Tanggal Lahir</Form.Label>
                                <Form.Control className="px-4" type="date" style={{borderRadius: 30, textAlign: "left"}} />
                            </Form.Group>

                            <h5 className="mt-5">Sosial Media Kamu</h5>
                            <Form.Group className="my-4 col-md-12" controlId="facebook">
                                <Form.Label>Facebook</Form.Label>
                                <Form.Control className="px-4" type="text" placeholder="Nama tampilkan akun facebook" style={{borderRadius: 30, textAlign: "left"}} />
                            </Form.Group>
                            <Form.Group className="mb-4 col-md-12" controlId="instagram">
                                <Form.Label>Instagram</Form.Label>
                                <Form.Control className="px-4" type="text" placeholder="Username akun instagram" style={{borderRadius: 30, textAlign: "left"}} />
                            </Form.Group>
                            <Form.Group className="mb-4 col-md-12" controlId="linkedin">
                                <Form.Label>LinkedIn</Form.Label>
                                <Form.Control className="px-4" type="text" placeholder="Tautan linkedin" style={{borderRadius: 30, textAlign: "left"}}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={'auto'} className="m-2 mt-4 justify-content-start button-selengkapnya">
                            <Button type="submit" className="p-1" style={{ background: 'none', border: 'none', boxShadow: 'none' }}>SIMPAN PERUBAHAN</Button>
                        </Col>
                    </Row>
                </Form>
            </Row>
        </Container>
    )

}

export default EditProfile;
