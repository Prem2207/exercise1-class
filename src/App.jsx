import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotes from './quotes.json'

import QuotesBox from './components/QuotesBox'
import color from './js/color'




function App() {
  const getIndexRandom = (arr) => Math.floor(Math.random() * arr.length);
  const firstQuote = quotes[getIndexRandom(quotes)];
  const firstColor = color[getIndexRandom(color)];

  const [randomQuote, setRandomQuote] = useState(firstQuote);
  const [randomColor, setRandomColor] = useState(firstColor);
  
  const backgroundObject = {
    backgroundColor: randomColor,
  };

  const getRandomAll = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)]);
    setRandomColor(color[getIndexRandom(color)]);
  };
  return (
    <div style={backgroundObject} className="App">
      <QuotesBox
        randomQuote={randomQuote}
        randomColor={randomColor}
        getRandomAll={getRandomAll}
      />
    </div>
  )
}

export default App
