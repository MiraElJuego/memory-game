import React from 'react'
import styled from 'styled-components'
import Card from './Card'

function Board() {
    // 36 cartas
    const cards = [
        1,2,3,4,5,6,7,8,9,
        1,2,3,4,5,6,7,8,9,
        1,2,3,4,5,6,7,8,9,
        1,2,3,4,5,6,7,8,9
    ]
    return (
        <BoardContainer>
            {
                cards.map((card) => (<Card name={card} />))
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