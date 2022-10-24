import React from 'react';

const Button = ({randomQuote, randomColor, getRandomAll}) => {
    const colorObj = {
        color: randomColor
    }

    const backgroundObj = {
        backgroundColor: randomColor
    }
  return (
   
      <button
        className="card__btn"
        style={backgroundObj}
        onClick={getRandomAll}
      >
        &#62;
      </button>
         );
        };

export default Button;