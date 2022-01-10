import React from "react";
import { Container } from "react-bootstrap";

import EditProfilComponents from '../components/Form Edit Profile/editprofile';

function EditProfilePage(){
    return (
        <Container fluid className="background-page min-vh-100 px-5 d-flex justify-content-center align-items-start">
            <EditProfilComponents></EditProfilComponents>
        </Container>
    )
}

export default EditProfilePage;