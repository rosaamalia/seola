import React, { useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import ModulScreen from ".././components/ModulScreen/ModulScreen";
import { toast } from "react-toastify";
import loader from '../images/loader.gif';
import AuthContext from '../context/AuthContext';
import { DetailModulContext } from "../context/DetailModulContext";
import api from '../services/api';
import error from '../services/error';

const ModulPage = () => {
    const { loggedIn } = useContext(AuthContext);
    const { modul, setModul }= useContext(DetailModulContext);
    const [kelas, setKelas] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/modul/progres')
        .then((res) => {
            setModul(res.data);
            setLoading(false)
        })
        .catch((err) => {
            let msg = error.handleError(err)
            console.log(msg || err)
            toast.error(msg || err)
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
    <div>
      {loading
      ?
      <Container className="min-vh-100 d-flex justify-content-center align-items-center flex-column">
          <img src={loader} alt="loader"style={{  width: '5rem' }}></img>
          <p className="p-0 m-0">Tunggu sebentar, sedang mengambil data</p>
      </Container>
      :
      <ModulScreen modul={modul} kelas={kelas}></ModulScreen>
      }
    </div>
  );
};

export default ModulPage;
