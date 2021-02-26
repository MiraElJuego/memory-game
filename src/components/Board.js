import React from 'react'
import styled from 'styled-components'
import Card from './Card'

function Board({cards}) {
    const {deck} = cards
    console.log('items', deck)
    return (
        <BoardContainer id="boardContainer">
            {
               deck && deck.map((card) => (<Card card={card} />))
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