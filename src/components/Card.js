import React from 'react'
import styled from 'styled-components'

function Card({ card }) {
    return (
        <CardContainer letter={card.letter}>
            <Icon>{(card.icon)}</Icon>        
        </CardContainer>
    )
}

export default Card

const CardContainer = styled.div`
    width: 200px;
    height: 200px; 
    background: orange;
    margin: 5px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3em;
    :hover {        
        opacity: 0.9;
        cursor: pointer;
    }
    :hover:after {
        content: '${props => props.letter ? props.letter: ''}';
    }
`

const Icon = styled.span`
    background: transparent;
    svg {
        width: 50px;
        height: 50px;
        color: white;
        background: transparent;
    }
    
`