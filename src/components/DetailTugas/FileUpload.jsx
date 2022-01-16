import React, {useState} from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { Modal,Button } from "react-bootstrap"
import { ButtonUpload } from '../DetailModule/Button';
import { MdUploadFile } from 'react-icons/md'
import './style.css'
import { toast } from 'react-toastify';
import api from '../../services/api';

function FileUpload() {
    const [show, setShow] = useState(false);
    const [tugasData, setTugasData] = useState();
    const { id } = useParams();
    const history = useHistory();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    function upload(e) {
      e.preventDefault();

      const formData = new FormData();
      formData.append('file', e.target.files[0]);

      setTugasData(formData);
    }

    function onInputChange(e) {
      e.preventDefault();

      api.post(`/tugas/upload/${id}`, tugasData, {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      })
      .then((res) => {
        console.log('Tugas berhasil diunggah')

        /** update progres modul */
        const data = {
          status_progres: 'SELESAI',
          tugas_selesai: true
        }

        api.put(`/progres/status/${id}`, data)
        .then((res) => {
          console.log('Modul selesai', res.data)
          setShow(false)
        })
        .catch((err) => {
          console.log(err.response?.data?.message || err)
          toast.error(err.response?.data?.message || err)
        })

        toast.success('Tugas berhasil diunggah');
      }).catch((err) => {
        toast.error(err.response?.data?.message || err)
      })

      
      setShow(false)
    }
  
    return (
      <>
        <ButtonUpload onClick={handleShow}>
            <MdUploadFile style={{color:"white", fontSize:"1.5em"}}/> UNGGAH TUGASMU DI SINI
        </ButtonUpload>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title style={{fontSize:15}}>Upload Tugasmu</Modal.Title>
          </Modal.Header>
          <form>
              <div class="form-group files color">
                <input type="file" className="form-control" multiple="" onChange={(e) => upload(e)}/>
              </div>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button style={{backgroundColor: "#242A55", border:"none"}} variant="primary" onClick={(e) => onInputChange(e)}>
                    Submit
                </Button>
          </Modal.Footer>
          </form>
          
        </Modal>
      </>
    );
  }
  
export default FileUpload;;