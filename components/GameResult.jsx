import React from 'react';
import '../components/GameResult.css';

const GameResult = ({ gameOver, draw, winner }) => {
  if (gameOver) {
    if (draw) {
      return <div className="game-result">It's a draw!</div>;
    } else if (winner) {
      return <div className="game-result">Player {winner} wins!</div>;
    }
  }

  return <div></div>;
};

export default GameResult;
