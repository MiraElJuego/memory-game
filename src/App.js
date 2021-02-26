import './App.css';
import { useState } from 'react'
import Header from './components/Header'
import Board from './components/Board'
import BuildCards from './utils/build'

function App() {

  const getInitialStatus = () => {
    const deck = BuildCards()
    return {
        deck
    }
  }

  const [cards, setCards] = useState(getInitialStatus())
  return (
    <div className="App">
      <Header setCards={setCards} />
      <Board cards={cards} />
    </div>
  );
}

export default App;
