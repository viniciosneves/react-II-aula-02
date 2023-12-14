import styled from "styled-components";

const Botao = styled.button`
    border-radius: 20px;
    background: ${props => props.$secundario ? '#FFF' : '#43BC83'};
    border: 2px solid#43BC83;
    padding: 8px 24px;
    text-align: center;
    color: ${props => props.$secundario ? '#43BC83' : '#FFF'};
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    white-space: nowrap;
    width: ${props => props.$fluido ? '100%' : 'auto'};
    cursor: pointer;
`

export default Botao