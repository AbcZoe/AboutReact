import React from "react";
import Square from "./Square";
import "./tictactoe.css";

function Board({squares, xIsNext, onPlay}) {
  const winner=calculateWinner(squares);
  let status;
  if(winner){
    status=`Winner: ${winner.winner}`;
  }else{
    status=`Next Player: ${xIsNext ? 'X':'O'}`;
  }

  function renderSquare(i) {
    const isHighlighted = winner && winner.line.includes(i);
    return (
      <Square
        value={squares[i]}
        onSquareClick={() => handleClick(i)}
        highlight={isHighlighted}
      />
    );
  };

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  function calculateWinner(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i=0;i<lines.length;i++){
      const [a,b,c] = lines[i]
      if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
        return { winner: squares[a], line: [a, b, c] };
      }
    }
    return null;
  }

  return (
    <>
      <div className="status">{status}</div>

      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  );
}

export default Board;