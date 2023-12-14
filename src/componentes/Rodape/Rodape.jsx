import styled from "styled-components"
import BtnIcon from "../BtnIcon/BtnIcon"

const RodapeEstilzado = styled.footer`
    background: #000;
    padding: 75px 150px;
    display: flex;
    gap: 80px;
    flex-wrap: wrap;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    justify-content: space-between;
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        li {
            margin-bottom: 12px;
            strong {
                font-size: 18px;
                font-style: normal;
                font-weight: 800;
            }
            a {
                text-decoration: none;
                color: #FFF;                    
                &:visited {
                    color: #FFF;                    
                }
            }
            &:first-child {
                margin-bottom: 16px;
            }
        }
    }
    @media (max-width: 768px) {
        padding: 24px;
    }
`

const UlSocial = styled.ul`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    li {
        margin: 0 -6px;
    }
`

const Rodape = () => {
    return (<RodapeEstilzado>
        <ul>
            <li>
                <img src="/logo.png" alt="" />
            </li>
            <li>
                <a href="#">Sobre</a>
            </li>
            <li>
                <a href="#">Perguntas frequentes</a>
            </li>
            <li>
                <a href="#">Carreira</a>
            </li>
        </ul>
        <ul>
            <li>
                <strong>Serviços</strong>
            </li>
            <li>
                <a href="#">Conta corrente</a>
            </li>
            <li>
                <a href="#">Conta PJ</a>
            </li>
            <li>
                <a href="#">Cartão de crédito</a>
            </li>
        </ul>
        <ul>
            <li>
                <strong>Contato</strong>
            </li>
            <li>
                <a href="tel:080000425008">
                    <strong>0800 004 250 08</strong>
                </a>
            </li>
            <li>
                <a href="mailto:meajuda@countrybank.com.br">
                    meajuda@countrybank.com.br
                </a>
            </li>
            <li>
                <a href="mailto:ouvidoria@countrybank.com.br">
                    ouvidoria@countrybank.com.br
                </a>
            </li>
        </ul>
        <ul>
            <li>
                <strong>Acesse nossas redes</strong>
            </li>
            <li>
                <UlSocial>
                    <li>
                        <BtnIcon>
                            <img src="/icones/ig.png" alt="" />
                        </BtnIcon>
                    </li>
                    <li>
                        <BtnIcon>
                            <img src="/icones/wp.png" alt="" />
                        </BtnIcon>
                    </li>
                    <li>
                        <BtnIcon>
                            <img src="/icones/yt.png" alt="" />
                        </BtnIcon>
                    </li>
                    <li>
                        <BtnIcon>
                            <img src="/icones/fb.png" alt="" />
                        </BtnIcon>
                    </li>
                </UlSocial>
            </li>
            <li>
                <img src="/logo.png" alt="" />
            </li>
        </ul>
    </RodapeEstilzado>)
}

export default Rodape