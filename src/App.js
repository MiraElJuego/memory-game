import './App.css';
import { useState } from 'react'
import Header from './components/Header'
import Board from './components/Board'
import BuildCards from './utils/build'

function App() {

  const getInitialStatus = () => {
    const deck = BuildCards()
    return {
        deck,
        selectedItems: [],
        isCompared: false,
        timesTried: 0
    }
  }

  const [cards, setCards] = useState(getInitialStatus())

  const selectCard = (card) => {
    if (
      cards.isCompared ||
      cards.selectedItems.indexOf(card) > -1 ||
      card.winner
    ) {
      return;
    }
    
    const selectedItems = [...cards.selectedItems, card]    
    setCards({deck: cards.deck, selectedItems, isCompared: false, timesTried: cards.timesTried})
    if (selectedItems.length === 2) {      
      compareCards(selectedItems)
    } 
  }

  const compareCards = (selectedItems) => {
    console.log('Ha seleccionado 2 cartas')
    setCards({deck: cards.deck, selectedItems, isCompared: true, timesTried: cards.timesTried})    
    setTimeout(() => {      
      const [firstCard, secondCard] = selectedItems
      let deck = cards.deck
      if (firstCard.value === secondCard.value) {
        deck = deck.map((card) => {                    
          if (card.value !== firstCard.value) {            
            return card;
          } else {
            return {...card, winner: true}
          }
        })
      }            
      winnerVerification(deck)
      setCards({deck: deck, selectedItems:[], isCompared: false, timesTried: cards.timesTried + 1})      
    }, 1000)
  }

  const winnerVerification = (deck) => {
    //deck.forEach((card) => card.winner = true)
    if (
      deck.filter((card) => !card.winner).length === 0
    ) {
      if (cards.timesTried > 0) {
        alert(`Haz ganado en ${cards.timesTried} ${(cards.timesTried > 1) ? 'intentos': 'intento'}.`)
      } else {
        alert(`Felicidades no se como le hiciste pero haz ganado.`)
      }      
      resetGame()
    }
  }

  const resetGame = () => {
    setCards(getInitialStatus())
  }

  return (
    <div className="App">
      <Header setCards={setCards} timesTried={cards.timesTried} resetGame={() => resetGame()} />
      <Board cards={cards} selectedItems={cards.selectedItems} selectCard={(card) => selectCard(card)}  />
    </div>
  );
}

export default App;
