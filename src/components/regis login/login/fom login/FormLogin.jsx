import React from "react";
import './style.css';
import { Container, Row, Col, Form, Button} from "react-bootstrap";
import Happy from "../gambarLogin/Happy";



function FormLogin() {
    return (
            <Container style={{marginTop: 130 ,marginBottom: 50}}>
                <Row>
                    <Col md={6} className="happy">
                        <Happy/>
                    </Col>
                    <Col md={6} sm={12} xs={8}>
                        <h3 style={{fontWeight:"bold"}}className="text-md-center text-sm-center">Welcome Back</h3>
                        <h5 className="text-md-center text-sm-center">Masuk Akun Seola</h5>
                        <br/>
                        <Form>
                            <Form.Control style={{maxWidth:400, marginLeft:70, marginRight:50, borderRadius: 30, textAlign: "center" }} size="text" type="email" placeholder="Email" />
                            <br/>
                            <Form.Control style={{maxWidth:400, marginLeft:70, marginRight:50, borderRadius: 30, textAlign: "center"}} size="text" type="password" placeholder="Password" />
                            <br/> 
                            <Form.Check style={{marginLeft:70, marginRight:50}} type="checkbox" label="Remember Me" />
                        </Form>
                            <br/>
                        <Button variant="secondary" style={{maxWidth:100 ,marginLeft:210, marginRight:210, borderRadius : 30, textAlign: "center"}} type="submit">Submit</Button>
                    </Col>
                </Row>
            </Container>
    )
};

export default FormLogin;