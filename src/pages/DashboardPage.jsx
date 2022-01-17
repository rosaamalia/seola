import React, { useState, useEffect, useContext } from "react";
import { Container, Col } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { toast } from "react-toastify";

import Kelas from '../components/DashboardComponents/Kelas';
import PreviewProfil from '../components/DashboardComponents/PreviewProfil';
import Leaderboard from '../components/DashboardComponents/Leaderboard';

import loader from '../images/loader.gif';
import AuthContext from '../context/AuthContext';
import { DetailModulContext } from "../context/DetailModulContext";
import api from '../services/api';
import error from '../services/error';

function DashboardPage(){
    const { loggedIn } = useContext(AuthContext);
    const { modul, setModul }= useContext(DetailModulContext);
    const [kelas, setKelas] = useState('');
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        api.get('/modul/progres')
        .then((res) => {
            setModul(res.data);
            setLoading(false)
        })
        .catch((err) => {
            error.handleError(err.response.status)
            console.log(err)
        })
  
        api.get(`/kelas/${loggedIn.data.bidang_seni_id}`)
        .then((res) => {
            setKelas(res.data)
            console.log(kelas)
            setLoading(false)
        })
        .catch((err) => {
            error.handleError(err.response.status)
            console.log(err)
            toast.error(err.response.data.message)
        })
  
    }, [])

    return (
        <Container>
            {loading
            ?
            <Container className="min-vh-100 d-flex justify-content-center align-items-center flex-column">
                <img src={loader} alt="loader"style={{  width: '5rem' }}></img>
                <p className="p-0 m-0">Tunggu sebentar, sedang mengambil data</p>
            </Container>
            :
            <Container fluid className="background-page min-vh-100 gap-xl-5 d-flex justify-content-center align-items-start">
                <Col xl={7} className="col-12 align-self-start mt-5">
                    <Kelas modul={modul} kelas={kelas}></Kelas>
                </Col>
                <Col xl={4} className="mt-5 d-none d-xl-block">
                    <PreviewProfil></PreviewProfil>
                    <Leaderboard></Leaderboard>
                </Col>
            </Container>
            }
        </Container>
    )
}

export default DashboardPage;