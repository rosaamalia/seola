import React from "react";
import { Container, Row, Col, Form, Button , Dropdown} from "react-bootstrap";
import Happy from "../gambarLogin/Happy";


function FormLogin() {
    return (
            <Container style={{marginTop: 130 ,marginBottom: 50}}>
                <Row>
                    <Col md={6} sm={12}>
                        <Happy/>
                    </Col>
                    <Col md={6} sm={12}>
                        <h3 className="text-md-center text-sm-center">Welcome Back</h3>
                        <h5 className="text-md-center text-sm-center">Masuk Akun Seola</h5>
                        <br/>
                        <Form>
                            <Form.Control style={{width:400, marginLeft:70, marginRight:50, borderRadius: 30, textAlign: "center" }} size="text" type="email" placeholder="Email" />
                            <br/>
                            <Form.Control style={{width:400, marginLeft:70, marginRight:50, borderRadius: 30, textAlign: "center"}} size="text" type="password" placeholder="Password" />
                            <br/> 
                            <Form.Check style={{marginLeft:70, marginRight:50}} type="checkbox" label="Remember Me" />
                        </Form>
                            <br/>
                        <Button variant="secondary" style={{width:100 ,marginLeft:210, marginRight:210, borderRadius : 30, textAlign: "center"}} type="submit">Submit</Button>
                    </Col>
                </Row>
            </Container>
    )
};

export default FormLogin;