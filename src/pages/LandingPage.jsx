import React from "react";
import './style/styles.css';
import styled from "styled-components";
import { Container } from "react-bootstrap";

import CardKelas from "../components/CardKelas/CardKelas"
import CarouselLanding from '../components/CarouselLanding/CarouselLanding';

const Section = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 5rem 0;
`;

function LandingPage(){
    return (
        <Container className="background-page min-vh-100 px-0" fluid>
            <Section style={{ backgroundColor: '#FFEFEB' }}>
                <CardKelas></CardKelas>
            </Section>
            <Section>
                <h1 style={{ marginBottom: '1.5rem' }}>Bertemu Kami</h1>
                <CarouselLanding></CarouselLanding>
            </Section>
        </Container>
    )
}

export default LandingPage;
