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
    background: #ffb300;
`