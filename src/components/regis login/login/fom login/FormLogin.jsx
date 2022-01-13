import React, {useState} from "react";
import './style.css';
import { Container, Row, Col, Form, Button} from "react-bootstrap";
import Happy from "../gambarLogin/Happy";
import { validEmail, validPassword } from "../../regis/form sign up/regex";
import { ToastContainer, toast } from 'react-toastify';
import api from '../../../../services/api';

function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleFormSubmit(e){
        e.preventDefault();

        if(!email || !password){
            toast.error('Mohon isi form terlebih dahulu dengan benar')
        } else if(!validEmail.test(email)) {
            toast.error('Email tidak valid')
        } else if(!validPassword.test(password)) {
            toast.error('Password minimal harus terdiri dari 8 karakter dengan 1 huruf kapital, simbol dan angka')
        } else {
            api.post('/auth/login', {
                email: email,
                password: password
            })
            .then((res) => {
                toast.success('Login berhasil')
                console.log(res)
            })
            .catch((err) => {
                if(err == 'Error: Request failed with status code 404') {
                    toast.error('User tidak ada');
                } else {
                    toast.error('Mohon isi form terlebih dahulu dengan benar');
                }
                
                console.log(`${err}`);
            });
        }
    }

    return (
            <Container style={{marginTop: 130 ,marginBottom: 50}}>
                <ToastContainer/>
                <Row>
                    <Col md={6} className="happy">
                        <Happy/>
                    </Col>
                    <Col md={6} sm={12} xs={8}>
                        <h3 style={{fontWeight:"bold"}}className="text-md-center text-sm-center">Welcome Back</h3>
                        <h5 className="text-md-center text-sm-center">Masuk Akun Seola</h5>
                        <br/>
                        <Form>
                            <Form.Control style={{maxWidth:400, marginLeft:70, marginRight:50, borderRadius: 30, textAlign: "center" }} size="text" type="email" placeholder="Email@mail.com" value={email} onChange={(event) => setEmail(event.target.value)} />
                            <br/>
                            <Form.Control style={{maxWidth:400, marginLeft:70, marginRight:50, borderRadius: 30, textAlign: "center"}} size="text" type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                            <br/> 
                            <Form.Check style={{marginLeft:70, marginRight:50}} type="checkbox" label="Remember Me" />
                        </Form>
                            <br/>
                        <Button onClick={(e) => handleFormSubmit(e)} variant="secondary" style={{maxWidth:100 ,marginLeft:210, marginRight:210, borderRadius : 30, textAlign: "center"}} type="submit">Submit</Button>
                    </Col>
                </Row>
            </Container>
    )
};

export default FormLogin;