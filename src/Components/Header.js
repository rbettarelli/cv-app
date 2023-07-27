import { styled } from "styled-components"
import InputField from "./InputField"


const Navtop = styled.header`
display:flex;
justify-content: center;
gap: 30px;
max-height: 100vh;
`
const Title = styled.h1`

`

const Button = styled.button `


`
export default function Header() {
    return (
        <Navtop>
            <Title>
                MAKE YOUR CV
            </Title>
            <Button className="btn btn-primary">Export to PDF</Button>
          
        </Navtop>
    )

}