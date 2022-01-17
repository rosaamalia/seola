import React, { useState, useEffect } from "react";
import { Container, Row ,Col, Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';
import error from '../../services/error';
import loader from '../../images/loader.gif';

function CardEvent (){
    const [event, setEvent] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/event')
        .then((res) => {
            setEvent(res.data)
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
            {
                loading
                ?
            <Container className="min-vh-100 d-flex justify-content-center align-items-center flex-column">
                <img src={loader} alt="loader"style={{  width: '5rem' }}></img>
                <p className="p-0 m-0">Tunggu sebentar, sedang mengambil data</p>
            </Container>
                :
            <Row xs={1} md={3} sm={1} lg={3} className="mx-2 my-2 d-flex flex-wrap" >
            {event.map((event) => (
                <Col>
                <Card style={{ width: '100%', height: '45rem', borderRadius : 11 }} className="mx-auto my-auto mb-5">
                    <Card.Img variant="top" src={event.gambar}
                    />
                    <Card.Body>
                    <Card.Title style={{color: "black", textAlign:"left", fontWeight:"bold", fontSize:"24px"}}>{event.nama_event}</Card.Title>
                    <Card.Subtitle style={{color: "black", textAlign:"left", fontWeight:"normal", fontSize:"16px"}}  className="mb-2">Tanggal : {event.tanggal_event}</Card.Subtitle>
                    <Card.Subtitle style={{color: "blue", textAlign:"left", fontWeight:"normal"}} className="mb-4"  >{event.tempat_event}</Card.Subtitle>
                    <Card.Text style={{color: "black", textAlign:"justify", fontWeight:"normal" }} className="mb-4">
                    {event.deskripsi}
                    </Card.Text>
                    <a href={event.link_eksternal} target="_blank" style={{ textDecoration: 'none' }}>
                        <Button variant="primary" type="submit" style={{backgroundColor: "#242A55", color: "white", minWidth:100}} className="mb-2 d-block mx-lg-auto mx-md-auto mx-sm-auto" >Ikuti</Button>
                    </a>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
            }
        </Container>
    )
}

export default CardEvent;