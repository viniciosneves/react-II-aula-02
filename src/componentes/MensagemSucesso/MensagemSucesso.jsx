import styled from "styled-components"

const Container = styled.section`
    div img {
        margin-bottom: 0;
        margin-top: 20px;
    }
    div + p {
        margin-top: 20px;
        margin-bottom: 32px;
    }
`

const MensagemSucesso = () => {
    return (<Container>
        <div>
          <img src="/check.png" alt="" />
        </div>
        <p>
            Prontinho, imagem capturada!
        </p>
    </Container>)
}

export default MensagemSucesso