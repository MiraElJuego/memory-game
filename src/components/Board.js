import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import CardFlip from './CardFlip'

function Board({cards, selectedItems, selectCard}) {
    const {deck} = cards    
    return (
        <BoardContainer id="boardContainer">
            {
               deck && deck.map((card, index) => {
                const isSelected = selectedItems.indexOf(card) > -1                   
                return (<CardFlip key={index} card={card} isSelected={isSelected} selectCard={() => selectCard(card)} winner={card.winner} />)
               })
            }
        </BoardContainer>
    )
}

export default Board

const BoardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 98%;
    height: 100hv;
    margin: 0 auto;
    justify-content: space-around;
`