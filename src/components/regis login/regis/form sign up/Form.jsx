import React,{useState} from "react";
import { Container, Row, Col, Form, Button , Dropdown} from "react-bootstrap";
import GambarRegis from "../gambar section 1/gambar";
import { validEmail, validPassword } from "./regex.jsx"

function FormRegis() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    function handleFormSubmit(e){
        e.preventDefault();

        if(!name || !validEmail.test(email) || !validPassword.test(password) || !validPassword.test(confirmPass)) {
            alert('Mohon isi form terlebih dahulu dengan benar');
        } else if(password !== confirmPass){
            alert('Konfirmasi Password tidak sama');
        } else {
            alert('Pendaftaran berhasil! Silahkan Sign In dengan akun yang telah di daftarkan')
            console.log("Success Terdaftar")
        }
    }
    
    return (            
            <Container style={{marginTop: 130 ,marginBottom: 50}}>
                <Row>
                    <Col md={6} sm={12} className="happy">
                        <GambarRegis/>
                    </Col>
                    <Col md={6} sm={12} xs={8}>
                        <h3 style={{fontWeight: "bold"}}className="text-md-center text-sm-center">Hello Student</h3>
                        <h5 className="text-md-center text-sm-center">Daftar Akun Remedial</h5>
                        <br/>
                        <Form>
                            <Form.Control style={{maxWidth:400, marginLeft:70, marginRight:50, borderRadius: 30, textAlign: "center"}}  size="text" placeholder="Nama Lengkap" value={name} onChange={(event) => setName(event.target.value)} />
                            <br/>
                            <Form.Control style={{maxWidth:400, marginLeft:70, marginRight:50, borderRadius: 30, textAlign: "center" }} size="text" type="email" placeholder="Email@mail.com" value={email} onChange={(event) => setEmail(event.target.value)}/>
                            <br/>
                            <Form.Control style={{maxWidth:400, marginLeft:70, marginRight:50, borderRadius: 30, textAlign: "center"}} size="text" type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                            <br/>
                            <Form.Control style={{maxWidth:400, marginLeft:70, marginRight:50, borderRadius: 30, textAlign: "center"}} size="text" type="password" placeholder="Konfirmasi Password" value={confirmPass} onChange={(event) => setConfirmPass(event.target.value)} />
                            <br/> 
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-autoclose-true" variant="warning" style={{width:400, marginLeft:70, marginRight:50, borderRadius: 30, textAlign: "center"}}>
                                Pilih Bidangmu
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Dropdown.Item href="#/Musik">
                                    Musik
                                </Dropdown.Item>
                                <Dropdown.Item href="#/Tari">Tari</Dropdown.Item>
                                <Dropdown.Item href="#/Sastra">Sastra</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <br/>
                            <Form.Check style={{marginLeft:70, marginRight:50}} type="checkbox" label="Saya setuju dengan ketentuan dan syarat" />
                        </Form>
                            <br/>
                        <Button onClick={(e) => handleFormSubmit(e)} variant="secondary" style={{maxWidth:100 ,marginLeft:210, marginRight:210, borderRadius : 30, textAlign: "center"}} type="submit">Submit</Button>
                    </Col>
                </Row>
            </Container>
    )
};

export default FormRegis;