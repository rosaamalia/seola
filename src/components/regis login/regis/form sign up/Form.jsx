import React from "react";
import { Container, Row, Col, Form, Button , Dropdown} from "react-bootstrap";
import GambarRegis from "../gambar section 1/gambar";


function FormRegis() {
    return (
            <Container style={{marginTop: 130 ,marginBottom: 50}}>
                <Row>
                    <Col md={6} sm={12} className="happy">
                        <GambarRegis/>
                    </Col>
                    <Col md={6} sm={12}>
                        <h3 className="text-md-center text-sm-center">Hello Student</h3>
                        <h5 className="text-md-center text-sm-center">Daftar Akun Remedial</h5>
                        <br/>
                        <Form>
                            <Form.Control style={{width:400, marginLeft:70, marginRight:50, borderRadius: 30, textAlign: "center"}}  size="text" placeholder="Nama Lengkap" />
                            <br/>
                            <Form.Control style={{width:400, marginLeft:70, marginRight:50, borderRadius: 30, textAlign: "center" }} size="text" type="email" placeholder="Email" />
                            <br/>
                            <Form.Control style={{width:400, marginLeft:70, marginRight:50, borderRadius: 30, textAlign: "center"}} size="text" type="password" placeholder="Password" />
                            <br/>
                            <Form.Control style={{width:400, marginLeft:70, marginRight:50, borderRadius: 30, textAlign: "center"}} size="text" type="password" placeholder="Konfirmasi Password" />
                            <br/> 
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-autoclose-true" variant="warning" style={{width:400, marginLeft:70, marginRight:50, borderRadius: 30, textAlign: "center"}}>
                                Pilih Bidangmu
                                </Dropdown.Toggle>
                                <Dropdown.Menu variant="dark">
                                <Dropdown.Item href="#/action-1">
                                    Musik
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Tari</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Sastra</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <br/>
                            <Form.Check style={{marginLeft:70, marginRight:50}} type="checkbox" label="Saya setuju dengan ketentuan dan syarat" />
                        </Form>
                            <br/>
                        <Button variant="secondary" style={{width:100 ,marginLeft:210, marginRight:210, borderRadius : 30, textAlign: "center"}} type="submit">Submit</Button>
                    </Col>
                </Row>
            </Container>
    )
};

export default FormRegis;