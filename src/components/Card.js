import React from 'react'
import styled from 'styled-components'
import "flip-card-wc"

function Card({ card, selectCard, isSelected, winner }) {
    return (            
        <CardContainer onClick={selectCard} image={card.image}>
            <flip-card variant={isSelected || winner ? 'none': 'click'} class="card">
                <div slot="front" className="front">{(card.icon)}{card.letter}{card.value}</div>
                <div slot="back" className="back">
                    <img src={card.image} alt="titulo"/>
                </div>
            </flip-card>
        </CardContainer>
    )
}

export default Card

const CardContainer = styled.div`
    margin: 5px 0;
    width: 200px;
    height: 200px; 
    --flip-card-height: 200px;
    .front {
        width: 200px;
        height: 200px; 
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3em;    
        background: orange;
        svg {
            width: 50px;
            height: 50px;
            color: white;
            background: transparent;
        }
        cursor: pointer;
    }    
    .back {
        position: relative;
        width: 200px;
        height: 200px; 
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3em;    
        background: white;
        background-size: cover;

        img {
            z-index: 1;
            height: 160px;        
        }
    }
    .back::before {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        content: "";
        z-index: 0;
        opacity: .5;
        background: url('${props => props.image}') center center;
    }
`