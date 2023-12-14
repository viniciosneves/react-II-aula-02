import styled from "styled-components"
import BtnIcon from "../BtnIcon/BtnIcon"

const Container = styled.div`
  img {
    margin: 32px auto
  }
`

const Captura = () => {
    return (<Container>
        <p>Clique no quadro abaixo para capturarmos uma imagem sua!</p>
        <BtnIcon>
            <img src="/reconhecimento-facial.png" alt="" />
        </BtnIcon>
    </Container>)
}

export default Captura