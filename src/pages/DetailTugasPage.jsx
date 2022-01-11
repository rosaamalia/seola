import React from 'react'
import { Container } from 'react-bootstrap'
import { DetailTugas } from '../components/DetailTugas/DetailTugas'

function DetailTugasPage(){
    return (
        <React.Fragment>
            <Container fluid>
                <DetailTugas/>
            </Container>
        </React.Fragment>
    )
}


export default DetailTugasPage;