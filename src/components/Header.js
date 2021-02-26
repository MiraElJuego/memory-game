import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <HeaderContainer>
            <Name>Juego de memoria</Name>
            <ButtonRestart>Reiniciar juego</ButtonRestart>
            <Counter>Numero de intentos</Counter>
        </HeaderContainer>
    )
}

export default Header


const HeaderContainer = styled.div`
    height: 50px;
    margin-top: 1em;
    margin-bottom: 1em;
    padding-left: 19px;
    padding-right: 19px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    align-content: center;
`
const Name = styled.div`
    font-size: 2em;
    padding: 10px 0;
`
const ButtonRestart = styled.button`
    border: none;
    background: purple;
    border-radius: 6px;
    padding: 10px 20px;
    cursor: pointer;
`
const Counter = styled.div``