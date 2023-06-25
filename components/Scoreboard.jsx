import React from 'react'

import "../components/Scoreboard.css"

export const ScoreBoard = ({ scores, isX }) => {
  const { xScore, oScore } = scores;

  return (
    <div className="scoreboard">
      <span className={`score x-score ${!isX && "inactive"}`}>X - {xScore}</span>
      <span className={`score o-score ${isX && "inactive"}`}>O - {oScore}</span>
    </div>
  )
}