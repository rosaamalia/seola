import React from "react";
import { Container, Row ,Col, Form, Button } from "react-bootstrap";
import editprofile from "./gambar/editprofile.png"


function EditProfile(){
    return (
        <Container style={{
            maxHeight : 2100,
            marginTop: 110 ,marginBottom: 75,
        }}>
            <Row>
                <Form>
                    <Row>
                    <Col>
                    <img src={editprofile} className="w-25 h-25 rounded float-start mt-3 mb-3"/>
                    <Button type="submit" className= "mt-3 mb-3" style={{maxHeight:50, borderRadius : 30, textAlign: "center",backgroundColor: "#242A55", color: "white"}}>
                        Unggah Foto Profile
                    </Button>
                    </Col>
                    
                    <Form.Group className="mb-3 col-lg-3 mt-3" controlId="namadepan">
                        <Form.Label>Nama Depan</Form.Label>
                        <Form.Control type="text" placeholder="nama depan..." style={{borderRadius: 30, textAlign: "left"}} />
                    </Form.Group>
                    <Form.Group className="mb-3 col-lg-3 mt-3" controlId="namabelakang">
                        <Form.Label>Nama Belakang</Form.Label>
                        <Form.Control type="text" placeholder="nama belakang..."style={{borderRadius: 30, textAlign: "left"}} />
                    </Form.Group>
                    <Form.Group className="mb-3 col-lg-6 mt-3" controlId="sekolah">
                        <Form.Label>Sekolah</Form.Label>
                        <Form.Control type="text" placeholder="sekolah..." style={{borderRadius: 30, textAlign: "left"}}/>
                    </Form.Group>
                    </Row>

                    <Row>
                    <Form.Group className="mb-3 col-lg-6" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="password..." style={{borderRadius: 30, textAlign: "left"}} />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-6" controlId="jeniskelamin">
                        <Form.Label>Jenis Kelamin</Form.Label>
                        <Form.Control type="text" placeholder="jenis kelamin..." style={{borderRadius: 30, textAlign: "left"}}/>
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-6" controlId="notelp">
                        <Form.Label>No. Telp</Form.Label>
                        <Form.Control type="number" placeholder="no.telp..." style={{borderRadius: 30, textAlign: "left"}} />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-6" controlId="tanggallahir">
                        <Form.Label>Tanggal Lahir</Form.Label>
                        <Form.Control type="date" placeholder="pilih tanggal lahir"style={{borderRadius: 30, textAlign: "left"}} />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-6" controlId="Alamat">
                        <Form.Label>Alamat</Form.Label>
                        <Form.Control type="text" placeholder="alamat..." style={{borderRadius: 30, textAlign: "left"}}/>
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-6" controlId="facebook">
                        <Form.Label>Facebook</Form.Label>
                        <Form.Control type="text" placeholder="facebook..." style={{borderRadius: 30, textAlign: "left"}} />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-6" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="email..." style={{borderRadius: 30, textAlign: "left"}}/>
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-6" controlId="instagram">
                        <Form.Label>Instagram</Form.Label>
                        <Form.Control type="text" placeholder="instagram..." style={{borderRadius: 30, textAlign: "left"}} />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-6" controlId="none">
                        {/* <Form.Label></Form.Label>
                        <Form.Control type="email" placeholder="email" /> */}
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-6" controlId="linkedin">
                        <Form.Label>LinkedIn</Form.Label>
                        <Form.Control type="text" placeholder="linkedin..." style={{borderRadius: 30, textAlign: "left"}}/>
                    </Form.Group>

                    </Row>
                    
  

                    <Button variant="primary" type="submit" className= "mt-3 mb-3" style={{maxWidth:300 , borderRadius : 30, textAlign: "center", backgroundColor: "#242A55", color: "white"}}>
                        Simpan Perubahan
                    </Button>
                    
                </Form>
            </Row>
        </Container>
    )

}

export default EditProfile;
