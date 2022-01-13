import React,{useState, useEffect} from "react";
import { Container, Row, Col, Form, Button , Dropdown} from "react-bootstrap";
import GambarRegis from "../gambar section 1/gambar";
import { validEmail, validPassword } from "./regex.jsx";
import { ToastContainer, toast } from 'react-toastify';
import api from '../../../../services/api';

function FormRegis() {
    const [namaDepan, setNamaDepan] = useState('');
    const [namaBelakang, setNamaBelakang] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bidang, setBidang] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [kelas, setKelas] = useState('');

    /** get kelas */
    useEffect(() => {
        api.get('/kelas')
        .then((res) => {
            const data = res.data;
            console.log(data);
            setKelas(data);
        })
        .catch((err) => console.log(`Error: ${err}`))
    }, [])

    /** post data user */
    function handleFormSubmit(e){
        e.preventDefault();

        if(!namaDepan || !namaBelakang || !email || !password || !confirmPass) {
            toast.error('Mohon isi form terlebih dahulu dengan benar');
            console.log('Error!')
        } else if(!validEmail.test(email)) {
            toast.error('Email tidak valid!')
        } else if(!validPassword.test(password) || !validPassword.test(confirmPass)) {
            toast.error('Password minimal harus terdiri dari 8 karakter dengan 1 huruf kapital, simbol dan angka')
        } else if(password !== confirmPass){
            toast.error('Konfirmasi password tidak sama');
        } else {
            api.post('/auth/register', {
                nama_depan: namaDepan,
                nama_belakang: namaBelakang,
                email: email,
                password: password,
                bidang_seni: bidang
            })
            .then((res) => {
                toast.success('Pendaftaran berhasil! Silahkan masuk dengan akun yang telah didaftarkan')
                console.log("Success Terdaftar")
            })
            .catch((err) => {
                toast.error('Mohon isi form terlebih dahulu dengan benar');
                console.log(`${err}`);
            });
        }
    }
    
    return (            
        <Container className="d-flex justify-content-center" style={{marginTop: 130 ,marginBottom: 50}}>
            <ToastContainer />
            <Row>
                <Col lg={6} className="d-none d-lg-block">
                    <GambarRegis/>
                </Col>
                <Col lg={5} className="d-flex justify-content-center flex-column">
                    <h3 style={{fontWeight: "bold"}}className="text-center">Hello Student</h3>
                    <h5 className="text-center">Daftar Akun Seola</h5>
                    <br/>
                    <Form>
                        <Row>
                            <Col sm={6}>
                                <Form.Control style={{borderRadius: 30, textAlign: "center"}}  size="text" placeholder="Nama depan" value={namaDepan} onChange={(event) => setNamaDepan(event.target.value)} />
                            </Col>
                            <Col sm={6} className="mt-3 mt-sm-0">
                                <Form.Control style={{borderRadius: 30, textAlign: "center"}}  size="text" placeholder="Nama belakang" value={namaBelakang} onChange={(event) => setNamaBelakang(event.target.value)} />
                            </Col>
                        </Row>
                        <br/>
                        <Form.Control style={{borderRadius: 30, textAlign: "center" }} size="text" type="email" placeholder="Email@mail.com" value={email} onChange={(event) => setEmail(event.target.value)}/>
                        <br/>
                        <Form.Control style={{borderRadius: 30, textAlign: "center"}} size="text" type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                        <br/>
                        <Form.Control style={{borderRadius: 30, textAlign: "center"}} size="text" type="password" placeholder="Konfirmasi Password" value={confirmPass} onChange={(event) => setConfirmPass(event.target.value)} />
                        <br/>
                        <Form.Select value={bidang} onChange={(event) => setBidang(event.target.value)} style={{width:"100%", borderRadius: 30, textAlign: "center" }}>
                            <option>Pilih Bidangmu</option>
                            { kelas==='' ? null : kelas.map(({_id, bidang_seni}, index) => (
                                <option value={_id} key={index}>{bidang_seni}</option>
                            ))}
                        </Form.Select>
                        <br/>
                        <Form.Check type="checkbox" label="Saya setuju dengan ketentuan dan syarat" />
                    </Form>
                    <br/>
                    <Button onClick={(e) => handleFormSubmit(e)} variant="secondary" className="align-self-center" style={{ borderRadius : 30, textAlign: "center" }} type="submit">Submit</Button>
                </Col>
            </Row>
        </Container>
    )
};

export default FormRegis;