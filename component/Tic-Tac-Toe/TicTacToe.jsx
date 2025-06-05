import React, { useState } from 'react';
import Board from './Board';
import './tictactoe.css';

function TicTacToe() {

    const [history,setHistory] = useState([Array(9).fill(null)]); //紀錄
    const [currentMove,setCurrentMove] = useState(0); //步數
    const xIsNext = currentMove%2 === 0;
    const currentSquares=history[currentMove];

    function handlePlay(nextSquares){
        const nextHistory = [...history.slice(0,currentMove+1),nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length-1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares,move) => {
        let description;
        if(move>0){
            description = `Go to #${move}`;
        }else{
            description = 'Go to game start';
        }
        return(
            <>
                <li key={move}>
                    <button onClick={()=>jumpTo(move)}>{description}</button>
                </li>
            </>
        );
    });

    return (
        <>
            <h1>Tic Tac Toe 井字棋遊戲</h1>
            <div className="game">
                <div className='game-board'>
                <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
                </div>
                <div className='game-info'>
                    <h4>遊戲歷程</h4>
                    <ol>{moves}</ol>
                </div>
            </div>
        </>
    );
}

export default TicTacToe;