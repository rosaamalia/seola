import React, {useState} from 'react'
import { Modal,Button } from "react-bootstrap"
import { ButtonUpload } from '../DetailModule/Button';
import { MdUploadFile } from 'react-icons/md'
import './style.css'

function FileUpload() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onInputChange = (e) => console.log(e.target.value)
  
    return (
      <>
        <ButtonUpload onClick={handleShow}>
            <MdUploadFile style={{color:"white", fontSize:"1.5em"}}/> UNGGAH TUGASMU DI SINI
        </ButtonUpload>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title style={{fontSize:15}}>Upload Tugasmu</Modal.Title>
          </Modal.Header>
          <form method="post" action="#" id="#">
              <div class="form-group files color">
                <input type="file" class="form-control" multiple=""/>
              </div>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button style={{backgroundColor: "#242A55", border:"none"}} variant="primary" type="submit" onClick={onInputChange}>
                    Submit
                </Button>
          </Modal.Footer>
          </form>
          
        </Modal>
      </>
    );
  }
  
export default FileUpload;;