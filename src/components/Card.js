import React from 'react'
import styled from 'styled-components'

function Card({ name }) {
    return (
        <CardContainer>
            {name}
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
        content: 'A';
    }
`