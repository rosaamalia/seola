import React, { useState, useContext } from "react";
import { Container, Row ,Col, Form, Button } from "react-bootstrap";
import { toast } from 'react-toastify';

import AuthContext from '../../context/AuthContext';
import api from '../../services/api';

function EditProfile(){
    const { loggedIn, setLoggedIn } = useContext(AuthContext);
    
    const [namaDepan, setNamaDepan] = useState(loggedIn.data.nama_depan);
    const [namaBelakang, setNamaBelakang] = useState(loggedIn.data.nama_belakang);
    const [telepon, setTelepon] = useState(loggedIn.data.telepon);
    const [alamat, setAlamat] = useState(loggedIn.data.alamat);
    const [email, setEmail] = useState(loggedIn.data.email);
    const [sekolah, setSekolah] = useState(loggedIn.data.sekolah);
    const [jenisKelamin, setJenisKelamin] = useState(loggedIn.data.jenis_kelamin);
    const [tanggalLahir, setTanggalLahir] = useState(loggedIn.data.tanggal_lahir);
    const [facebook, setFacebook] = useState(loggedIn.data.facebook);
    const [instagram, setInstagram] = useState(loggedIn.data.instagram);
    const [linkedin, setLinkedin] = useState(loggedIn.data.linkedin);
    const [fotoProfil, setfotoProfil] = useState(loggedIn.data.foto_profil);

    function getProfile() {

        api.get('/profile')
        .then((res) => {
            setLoggedIn({
                isLoggedIn: true,
                data: res.data,
                token: loggedIn.token
            })

        })   
    }

    function handleFormSubmit(e){
        e.preventDefault();

        const data = {
            nama_depan: namaDepan,
            nama_belakang: namaBelakang,
            telepon: telepon,
            alamat: alamat,
            email: email,
            sekolah: sekolah,
            jenis_kelamin: jenisKelamin,
            tanggal_lahir: tanggalLahir,
            facebook: facebook,
            instagram: instagram,
            linkedin: linkedin
        }

        api.put('/user', data)
        .then((res) => {
            getProfile();
            toast.success('Data berhasil diperbarui')
        })
        .catch((err) => {
            console.log(err.response?.data?.message || err)
            toast.error(err.response?.data?.message || err)
        })
    }

    async function upload(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', e.target.files[0]);

        try {
            const res = await api.post('/profile/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            const {file_name, file_path} = res.data;
            setfotoProfil(file_path);
            console.log(file_name, file_path)

            getProfile();
            toast.success('Foto berhasil diperbarui');
        } catch (err) {
            toast.error(err.response?.data?.message || err)
        }
    }

    return (
        <Container className="py-5">
            <Row>
                <Form>
                    <Row className="gap-md-5 flex-column flex-md-row">
                        <Col>
                            <Row className="mt-4 py-1 flex-column flex-md-row justify-content-md-start align-items-center">
                                <Col className="col-auto mb-3 mb-lg-0">
                                    <img className="photo-profile" src={fotoProfil}></img>
                                </Col>
                                <Col className="col-auto justify-content-center justify-content-md-start button-selengkapnya">
                                    <Form.Label for="upload-foto" className="m-0 p-1" style={{ cursor: 'pointer', color: 'white' }}>UNGGAH FOTO PROFIL</Form.Label>
                                    <input type="file" id="upload-foto" style={{ opacity: 0, position: 'absolute', zIndex: -1 }} onChange={(e) => upload(e)}></input>
                                    {/* <Button type="submit" className="p-1" style={{ background: 'none', border: 'none', boxShadow: 'none' }}>UNGGAH FOTO PROFIL</Button> */}
                                </Col>
                            </Row>
                            <Row>
                                <Form.Group className="col-md-6 my-4" controlId="namadepan">
                                    <Form.Label>Nama Depan</Form.Label>
                                    <Form.Control className="px-4" type="text" placeholder="Tulis nama depan" style={{borderRadius: 30, textAlign: "left"}} value={namaDepan} onChange={(event) => setNamaDepan(event.target.value)}/>
                                </Form.Group>
                                <Form.Group className="col-md-6 mt-0 mb-4 my-md-4" controlId="namabelakang">
                                    <Form.Label>Nama Belakang</Form.Label>
                                    <Form.Control className="px-4" type="text" placeholder="Tulis nama belakang"style={{borderRadius: 30, textAlign: "left"}} value={namaBelakang} onChange={(event) => setNamaBelakang(event.target.value)}/>
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-4 col-md-12" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="px-4" type="password" placeholder="Password" style={{borderRadius: 30, textAlign: "left"}} />
                            </Form.Group>
                            <Form.Group className="mb-4 col-md-12" controlId="notelp">
                                <Form.Label>No. Telp</Form.Label>
                                <Form.Control className="px-4" type="text" placeholder="Tulis nomor telepon" style={{borderRadius: 30, textAlign: "left"}} value={telepon} onChange={(event) => setTelepon(event.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-4 col-md-12" controlId="Alamat">
                                <Form.Label>Alamat</Form.Label>
                                <Form.Control className="px-4" type="text" placeholder="Tulis alamat domisili" style={{borderRadius: 30, textAlign: "left"}} value={alamat} onChange={(event) => setAlamat(event.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-4 col-md-12" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control className="px-4" type="email" placeholder="Tulis email" style={{borderRadius: 30, textAlign: "left"}} value={email} onChange={(event) => setEmail(event.target.value)}/>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-4 col-md-12" controlId="sekolah">
                                <Form.Label>Sekolah</Form.Label>
                                <Form.Control className="px-4" type="text" placeholder="Tulis nama sekolah" style={{borderRadius: 30, textAlign: "left"}} value={sekolah} onChange={(event) => setSekolah(event.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-4 col-md-12" controlId="jeniskelamin">
                                <Form.Label>Jenis Kelamin</Form.Label>
                                <Form.Select aria-label="Jenis Kelamin" className="px-4" type="text" placeholder="Jenis kelamin" style={{borderRadius: 30, textAlign: "left"}} onChange={(event) => setJenisKelamin(event.target.value)}>
                                    <option>{jenisKelamin}</option>
                                    <option value="Laki-laki">Laki - laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-4 col-md-12" controlId="tanggallahir">
                                <Form.Label>Tanggal Lahir</Form.Label>
                                <Form.Control className="px-4" type="date" style={{borderRadius: 30, textAlign: "left"}} value={tanggalLahir} onChange={(event) => setTanggalLahir(event.target.value)}/>
                            </Form.Group>

                            <h5 className="mt-5">Sosial Media Kamu</h5>
                            <Form.Group className="my-4 col-md-12" controlId="facebook">
                                <Form.Label>Facebook</Form.Label>
                                <Form.Control className="px-4" type="text" placeholder="Nama akun facebook" style={{borderRadius: 30, textAlign: "left"}} value={facebook} onChange={(event) => setFacebook(event.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-4 col-md-12" controlId="instagram">
                                <Form.Label>Instagram</Form.Label>
                                <Form.Control className="px-4" type="text" placeholder="Username akun instagram" style={{borderRadius: 30, textAlign: "left"}} value={instagram} onChange={(event) => setInstagram(event.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-4 col-md-12" controlId="linkedin">
                                <Form.Label>LinkedIn</Form.Label>
                                <Form.Control className="px-4" type="text" placeholder="Tautan linkedin" style={{borderRadius: 30, textAlign: "left"}} value={linkedin} onChange={(event) => setLinkedin(event.target.value)}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-sm-auto m-2 mt-4 justify-content-center justify-content-md-start button-selengkapnya">
                            <Button onClick={(e) => handleFormSubmit(e)} type="submit" className="p-1" style={{ background: 'none', border: 'none', boxShadow: 'none' }}>SIMPAN PERUBAHAN</Button>
                        </Col>
                    </Row>
                </Form>
            </Row>
        </Container>
    )

}

export default EditProfile;
