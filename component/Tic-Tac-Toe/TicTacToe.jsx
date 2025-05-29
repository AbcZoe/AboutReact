import React from 'react';
import Board from './Board';
import './tictactoe.css';

function TicTacToe() {
    return (
        <>
            <h1>Tic Tac Toe 井字棋遊戲</h1>
            <div className="game">
                <div className='game-board'>
                <Board />
                </div>
            </div>
        </>
    );
}

export default TicTacToe;