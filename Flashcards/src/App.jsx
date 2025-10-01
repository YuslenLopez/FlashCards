import { useState } from 'react'
import './App.css'

const cardSet={
    title: "Science Trivia",
    description: "These card will test your knowledge in science related trivia",
    cards: [
        {question: "These are the only two planets in our solar system that do not have moons", answer: "Mercury and Venus"},
        {question: "This geologic formation may be found overhead if you are in a cave", answer: "stalactites"},
        {question: "This living animal has the heaviest brain", answer: "sperm whales"},
        {question: "Matter that does not enter chemical reactions is described as this", answer: "inert"},
        {question: "This was the first genetically engineered organism", answer: "tobacco plant"},
        {question: "The planets make up this percentage of the mass in our solar system", answer: "0.135%"},
        {question: "The first Earth Day was celebrated in this year", answer: " 1970"},
        {question: "Which planet in our solar system has the most moons?", answer: " Saturn. It has 146 moons"},
        {question: "How old is our sun?", answer: "4.6 billion years"},
        {question: "How long does a day on Mercury last", answer: "59 Earth days"},

    ]
};

function Flashcard({card}){
  const [flipped, setFlipped]=useState(false);

  return(
    <div onClick={()=> setFlipped(!flipped)} className='card'>
      {flipped ? card.answer: card.question}
    </div>
  );
}




function App() {
  const [curIndex, setCurIndex] = useState(0)

  const nextCard=()=>{

    const randomIndex = Math.floor(Math.random()*cardSet.cards.length);
    setCurIndex(randomIndex);
    // for iterating through them one by one 
    // if (curIndex < cardSet.cards.length-1){
    //   setCurIndex(curIndex+1);
      
    // }
    // else{
    //   setCurIndex(0);
      
    // }

  };

  const currentCard = cardSet.cards[curIndex];

  return (
    <>
      <div className='box'>
        <h1 className='title'>{cardSet.title}</h1>
        <p className='description'>{cardSet.description}</p>
        <p>Number of cards: {cardSet.cards.length}</p>

        <Flashcard card={currentCard}/>
        <button onClick={nextCard}>Next</button>
                
      </div>
    </>
  )
}

export default App
