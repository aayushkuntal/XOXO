import React from 'react'
import "../components/Resetbutton.css"

const Resetbutton = ({resetGame}) => {
  return (
    <button className="reset-btn" onClick={resetGame}>Reset Game</button>
  )
}

export default Resetbutton