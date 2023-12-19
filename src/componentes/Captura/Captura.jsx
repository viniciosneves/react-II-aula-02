import styled from "styled-components"
import BtnIcon from "../BtnIcon/BtnIcon"
import { useState } from "react";
import Camera from "react-html5-camera-photo";

const Container = styled.div`
  img {
    margin: 32px auto;
    max-width: 100%;
  }
  video {
    max-width: 100%;
  }
`

const Captura = ({ aoCapturar }) => {
    const [capturando, setCapturando] = useState(false)
    const [fotoSrc, setFotoSrc] = useState('/reconhecimento-facial.png')
    const aoTirarFoto = (foto) => {
        setFotoSrc(foto)
        aoCapturar(foto)
        setCapturando(false)
        console.log('foto tirada');
    }
    return (<Container>
        
        <p>Clique no quadro abaixo para capturarmos uma imagem sua!</p>

        {!capturando && <BtnIcon onClick={() => setCapturando(true)}>
            <img src={fotoSrc} alt="" />
        </BtnIcon>}

        {capturando && <Camera
            onTakePhoto={aoTirarFoto}
        />}

    </Container>)
}

export default Captura