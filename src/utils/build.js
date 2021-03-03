import shuffle from 'lodash.shuffle'
import Icons from './icons'

const NUMBER_OF_CARDS = 36;

const BuildCards = () => {
    const icons = Icons()
    const letters = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ]    
    let cards = []
    let index = 1;
    while(cards.length < NUMBER_OF_CARDS) {
        const indexIcon = Math.floor(Math.random * icons.length)
        const indexLetter = Math.floor(Math.random * letters.length)
        const card = {
            letter: letters.splice(indexLetter, 1)[0],
            icon: icons.splice(indexIcon, 1)[0],
            image: `/images/memory-game-${(index <= 9) ? `0${index}`: `${index}`}.jpg`,
            operation: '',
            result: '',
            winner: false,
            value: index,
        }        
        cards.push(card)
        // Clonar la carta para apuntar a otro objeto con las mismas propiedades.
        cards.push({...card})
        index+=1
    }
    return shuffle(cards)
}

  
export default BuildCards;