import React from "react"
import { Row, Figure } from "react-bootstrap"
import Gambar1 from "./modul21.jpg"
import Gambar2 from "./modul22.jpg"
import Gambar3 from "./modul23.jpg"

function Textual() {
    return(
        <>
        <Row>
            <Figure>
                <Figure.Image
                    src={Gambar1}
                />
            </Figure>
        </Row>
        <Row>
            <Figure>
                <Figure.Image
                    src={Gambar2}
                />
            </Figure>
        </Row>
        <Row>
            <Figure>
                <Figure.Image
                    src={Gambar2}
                />
            </Figure>
        </Row>

        </>
        
    )
    
}

export default Textual;