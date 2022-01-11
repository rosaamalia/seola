import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import './style.css'
import RightSection from '../DetailModule/Right_Section/RightSection'
import styled from 'styled-components'
import { ButtonDetailTugas } from "../DetailModule/Button";


const Title = styled.div`
    color: black;
    font-size: 18px;
    margin-left: 120px;
    font-weight: bold;
`;

const Desc = styled.div`
    color
`

export const DetailTugas = () => {
    return (
        <>
        <Row>
            <Col lg={8} md={7} style={{marginTop:100}}>
                <Title>
                    Tugas: Perkenalan Body Painting
                </Title>
                <Card style={{ 
                    width: '18rem', 
                    fontSize: 12, 
                    marginLeft: 120, 
                    marginTop: 20, 
                    backgroundColor: "#FFF8EF",
                    border: "1px solid #F9BD67",
                    textAlign : "center"
                    }}>
                    <Card.Body>
                        <Card.Text>
                        Batas Waktu: 10 Agustus 2021 23:59 PM
                        </Card.Text>
                    </Card.Body>
                </Card>
                <p className='kriteria' style={{
                    marginLeft : 120,
                    marginTop : 20,
                    fontWeight: "bold" 
                }}>Kriteria</p>
            </Col>
            <Col lg={4} md={4} style={{marginTop:55}} className="sectionright">
                <h4 style={{marginLeft:69,marginTop: 50, marginBottom: 30, fontWeight: "bold"}}>Daftar isi</h4>
                <hr style={{ width: '100%', backgroundColor: 'gray', margin: '1% 2%'}}></hr>
                <RightSection />
                <br/>
                <p style={{
                    fontSize: 12,
                    textAlign: "center"
                }}>Uji pemahaman dan eksplorasi lebih jauh dengan tugas</p>
                <br/>
                <ButtonDetailTugas>Detail Tugas</ButtonDetailTugas>
            </Col>
        </Row>
        </>
    )
}
