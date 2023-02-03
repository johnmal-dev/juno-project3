import React, { useState } from 'react';

const GameForm = ({ setGameQuery, gameQuery }) => {
  const [gameInput, setGameInput] = useState(gameQuery);
  const handleSubmit = (e) => {
    e.preventDefault();
    setGameQuery(gameInput);
  };
  return (
    <form
      className='game-form text-center'
      onSubmit={handleSubmit}
    >
      <label
        htmlFor='game-input'
        className='sr-only'
      >
        Enter a board game title
      </label>
      <input
        id='game-input'
        type='text'
        value={gameInput}
        placeholder='Enter board game'
        onChange={(e) => setGameInput(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default GameForm;
