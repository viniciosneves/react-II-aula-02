import styled from "styled-components"

const SecaoEstilizada = styled.section`
    background: linear-gradient(90deg, #43BC83 0%, #F3F7E8 100%);
    padding: 60px;
    text-align: center;
    h1 {
        color: #1B1B1B;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`

const TituloPrincipal = () => {
    return (<SecaoEstilizada>
        <h1>O primeiro passo da sua <br/> liberdade financeira!</h1>
    </SecaoEstilizada>)
}

export default TituloPrincipal