import React, {useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import './style.css';
import { Container, Row, Col, Form, Button} from "react-bootstrap";
import Happy from "../gambarLogin/Happy";
import { validEmail, validPassword } from "../../regis/form sign up/regex";
import { toast } from 'react-toastify';
import api from '../../../../services/api';

import AuthContext from '../../../../context/AuthContext'; 

function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [token, setToken] = useState('');
    const { loggedIn, setLoggedIn } = useContext(AuthContext);

    const history = useHistory();

    function handleFormSubmit(e){
        e.preventDefault();

        if(!email || !password){
            toast.error('Mohon isi form terlebih dahulu dengan benar')
        } else if(!validEmail.test(email)) {
            toast.error('Email tidak valid')
        } else if(!validPassword.test(password)) {
            toast.error('Password minimal harus terdiri dari 8 karakter dengan 1 huruf kapital, simbol dan angka')
        } else {
            /** post login */
            api.post('/auth/login', {
                email: email,
                password: password
            })
            .then((res) => {
                api.defaults.headers.common = {
                    Authorization: `Bearer ${res.data.token}`
                }

                setToken(res.data.token)
                localStorage.setItem("token", JSON.stringify(res.data.token));

                /** mengambil data user */
                api.get('/profile')
                .then((res) => {

                    const data = {
                        isLoggedIn: true,
                        data: res.data,
                        token: token
                    }

                    setLoggedIn(data)
                })
                .catch(({ response }) => {
                    console.log(response?.data?.message || 'Unexpected Error')
                })

                toast.success('Login berhasil')
                console.log(loggedIn)

                history.push('/')
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
                <Row>
                    <Col md={6} className="happy">
                        <Happy/>
                    </Col>
                    <Col md={5} className="d-flex flex-column justify-content-center">
                        <h3 style={{fontWeight:"bold"}}className="text-center">Welcome Back</h3>
                        <h5 className="text-center">Masuk Akun Seola</h5>
                        <br/>
                        <Form>
                            <Form.Control style={{borderRadius: 30, textAlign: "center" }} size="text" type="email" placeholder="Email@mail.com" value={email} onChange={(event) => setEmail(event.target.value)} />
                            <br/>
                            <Form.Control style={{borderRadius: 30, textAlign: "center"}} size="text" type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                            <br/> 
                            <Form.Check style={{marginLeft:70, marginRight:50}} type="checkbox" label="Remember Me" />
                        </Form>
                            <br/>
                        <Button onClick={(e) => handleFormSubmit(e)} variant="secondary" style={{maxWidth:100, borderRadius : 30, textAlign: "center"}} type="submit" className="align-self-center">Submit</Button>
                    </Col>
                </Row>
            </Container>
    )
};

export default FormLogin;