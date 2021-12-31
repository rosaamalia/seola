import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import './style/styles.css';

import CarouselLanding from '../components/CarouselLanding/CarouselLanding';
import CardKelas from "../components/CardKelas/CardKelas";

const Section = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
`;

function LandingPage(){
    return (
        <Container className="background-page min-vh-100 px-0" fluid>
            <Section style={{ 'backgroundColor': 'beige' }}>
                <CardKelas></CardKelas>
            </Section>
            <Section style={{ 'backgroundColor': 'white' }}>
                <h1 style={{ marginBottom: '1.5rem' }}>Bertemu Kami</h1>
                <CarouselLanding></CarouselLanding>
            </Section>
        </Container>
    )
}

export default LandingPage;