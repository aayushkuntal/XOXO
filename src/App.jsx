import React from 'react';
import { useState } from "react";
import './App.css'
import Board from '../components/Board.jsx'
import { ScoreBoard } from '../components/Scoreboard';
import Resetbutton from '../components/Resetbutton';

function App() {

    const WIN_CONDITIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const [board, setBoard] = useState(Array(9).fill(null));
    const [isX, setX] = useState(true)
    const [scores, setScores] = useState({ xScore: 0, oScore: 0 })
    const [gameOver, setGameOver] = useState(false);

    const handleBoxClick = (boxIndex) => {
        const newBoard = board.map((value, index) => {
            if (index === boxIndex) {
                return isX ? 'X' : 'O';
            }
            else {
                return value;
            }
        });
        setBoard(newBoard);

        // Step 2: Check if either player has won the game
        const winner = checkWinner(newBoard);

        if (winner) {
            if (winner === "O") {
                let { oScore } = scores;
                oScore += 1;
                setScores({ ...scores, oScore })
            } else {
                let { xScore } = scores;
                xScore += 1;
                setScores({ ...scores, xScore })
            }
        }
        setX(!isX);
    }

    const checkWinner = (board) => {
        for (let i = 0; i < WIN_CONDITIONS.length; i++) {
            const [x, y, z] = WIN_CONDITIONS[i];

            // Iterate through win conditions and check if either player satisfies them
            if (board[x] && board[x] === board[y] && board[y] === board[z]) {
                setGameOver(true);
                return board[x];
            }
        }
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        !gameOver?setScores({ xScore: 0, oScore: 0 }):setScores(scores);
        setGameOver(false);
    }

    return (
        <>
            <div className="App">
            <ScoreBoard scores={scores} isX={isX} />
            <Board board={board} onClick={gameOver ? resetGame : handleBoxClick} />
            <Resetbutton resetGame={resetGame}/>
            </div>
        </>
    )
}

export default App
