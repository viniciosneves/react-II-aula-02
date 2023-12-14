import styled from "styled-components"
import Botao from "../Botao/Botao"

const NavEstilizada = styled.nav`
    padding: 38px 120px;
    @media (max-width: 768px) {
        padding: 24px;
    }
`

const UlEstilizada = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
    li {
        a {
            color: #000;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            text-decoration: none;
        }
        form {
        }
        @media (max-width: 768px) {
            width: 100%;
            button {
                width: 100%;
            }
        }
    }
`

const InputBusca = styled.input`
    border-radius: 20px;
    border: 2px solid #000;
    width: 100%;
    @media (min-width: 768px) {
        width: 384px;
    }
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 10px;
`

const BarraNavegacao = () => {
    return (<NavEstilizada>
        <UlEstilizada>
            <li>
                <img src="/logo.png" alt="" />
            </li>
            <li>
                <a href="#">Sobre</a>
            </li>
            <li>
                <a href="#">Serviços</a>
            </li>
            <li>
                <form>
                    <InputBusca type="search" placeholder="Busque aqui"/>
                </form>
            </li>
            <li>
                <Botao>
                    Abrir conta
                </Botao>
            </li>
            <li>
                <Botao $secundario>
                    Acessar conta
                </Botao>
            </li>
        </UlEstilizada>
    </NavEstilizada>)
}

export default BarraNavegacao