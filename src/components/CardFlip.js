import React, { useState, useEffect } from 'react'
import FlipCard from '@dragonza/react-flip-card'
import styled from 'styled-components'

const FrontCardContent = () => {
    return (    
        <CardContainer>
            <CardFront />                          
        </CardContainer>
      )
}

const BackCardContent = (props) => {
    console.log(props)
    const {card} = props
    return (    
        <CardContainer>
          <CardBack image={card.image}>
            <img src={card.image} alt="titulo"/>
          </CardBack>  
        </CardContainer>
      )
}

function CardFlip({ card, selectCard, isSelected, winner }) { 
    const [flipped, setFlipped] = useState(true)
    const handleCardClick = () => {
        if (!winner) {
            setFlipped(!flipped)
            selectCard()    
        }        
    }

    useEffect(() => {
        if (!winner && !isSelected) {
            setFlipped(false)
        }
    }, [isSelected])

    return (
        <div>
            <FlipCard
                height="200px"
                width="200px"
                cardContainerStyle={{ color: 'white', padding: '10px' }}
                flipped={flipped}          
                onCardClick={handleCardClick}
                backContent={<BackCardContent card={card} />}
                frontContent={<FrontCardContent />}
            />
        </div>
    )
}

export default CardFlip

const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;    
`

const CardFront = styled.div`
    width: 100%;
    height: 100%;
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
    background: url('/images/card-cover.jpg') center center;
    background-size: cover;
`

const CardBack = styled.div`
    position: relative;
    width: 100%;
    height: 100%; 
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
    ::before {
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