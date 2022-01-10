import React from "react";
import { Container, Row ,Col, Button, Card } from "react-bootstrap";

function CardEvent (){
    return (
        <Container>
            {/* <Row style={{ marginTop: 110, marginBottom: 75}}>
            <Card style={{ width: '18rem', height: '30rem', maxWidth: '18rem', maxHeight: '30rem' }}  className="mx-auto my-auto mb-4">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=945&q=80" />
                <Card.Body>
                    <Card.Title style={{color: "black", textAlign:"left", fontWeight:"bold", fontSize:"24px"}}>Pentas Seni Lukis</Card.Title>
                    <Card.Subtitle style={{color: "black", textAlign:"left", fontWeight:"normal", fontSize:"16px"}}  className="mb-2">Tanggal : 02/02/2022</Card.Subtitle>
                    <Card.Subtitle style={{color: "blue", textAlign:"left", fontWeight:"normal"}} className="mb-4"  >Online</Card.Subtitle>
                    <Card.Text style={{color: "black", textAlign:"justify", fontWeight:"normal" }} className="mb-4">
                    Hasil karya luar biasa dari anak-anak seni musik untuk menampilkan karya mereka, saksikan pentasnya. yuk buruan daftar!
                    </Card.Text>
                    <Button variant="primary" type="submit" style={{BackgroundColor: "#242A55", color: "white", minWidth:100}} className="mb-2" >Ikuti</Button>
                </Card.Body>
            </Card>

            
            
            </Row> */}

            <Row xs={1} md={3} sm={1} lg={3} className="mx-2 my-2" >
            {Array.from({ length: 10 }).map((_, idx) => (
                <Col>
                <Card style={{ width: '18rem', height: '30rem', maxWidth: '18rem', maxHeight: '30rem', borderRadius : 11 }} className="mx-auto my-auto mb-5">
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=945&q=80"
                    />
                    <Card.Body>
                    <Card.Title style={{color: "black", textAlign:"left", fontWeight:"bold", fontSize:"24px"}}>Pentas Seni Lukis</Card.Title>
                    <Card.Subtitle style={{color: "black", textAlign:"left", fontWeight:"normal", fontSize:"16px"}}  className="mb-2">Tanggal : 02/02/2022</Card.Subtitle>
                    <Card.Subtitle style={{color: "blue", textAlign:"left", fontWeight:"normal"}} className="mb-4"  >Online</Card.Subtitle>
                    <Card.Text style={{color: "black", textAlign:"justify", fontWeight:"normal" }} className="mb-4">
                    Hasil karya luar biasa dari anak-anak seni musik untuk menampilkan karya mereka, saksikan pentasnya. yuk buruan daftar!
                    </Card.Text>
                    <Button variant="primary" type="submit" style={{backgroundColor: "#242A55", color: "white", minWidth:100}} className="mb-2 d-block mx-lg-auto mx-md-auto mx-sm-auto" >Ikuti</Button>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </Container>
    )
}

export default CardEvent;