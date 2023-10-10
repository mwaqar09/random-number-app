import React, { useState } from 'react';

function Random() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 9999) + 1;
    setRandomNumber(newRandomNumber);
  };

  return (
    <div className="random-container black-background"> {/* Apply the CSS class */}
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {randomNumber && <p>Random Number: {randomNumber}</p>}
    </div>
  );
}

export default Random;
