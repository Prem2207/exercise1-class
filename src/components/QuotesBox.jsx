import React from 'react';
import Button from './Button';
import Icon from './Icon';

const QuotesBox = ({randomQuote, randomColor, getRandomAll}) => {

    const colorObj = {
        color: randomColor
    }

    const backgroundObj = {
        backgroundColor: randomColor
    }


  return (
    <article style={colorObj} className="card">
        <Icon
        randomQuote={randomQuote}
        randomColor={randomColor}
        getRandomAll={getRandomAll}
        />
        <p className='card__quote'>{randomQuote.quote}</p>
        <h1 className='card__author'>{randomQuote.author}</h1>

        <Button 
         randomQuote={randomQuote}
         randomColor={randomColor}
         getRandomAll={getRandomAll}
      />

    </article>
  )
}

export default QuotesBox;