import React from "react";
import Square from "./Square";
import "./tictactoe.css";

function Board({squares, xIsNext, onPlay}) {

  const handleClick = (i)=>{
    console.log(`Square[${i}]`)
  }

  return (
    <>
      <div className="board-row">
        <Square value={0} onSquareClick={() => handleClick(0)} />
        <Square value={1} onSquareClick={() => handleClick(1)} />
        <Square value={2} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={3} onSquareClick={() => handleClick(3)} />
        <Square value={4} onSquareClick={() => handleClick(4)} />
        <Square value={5} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={6} onSquareClick={() => handleClick(6)} />
        <Square value={7} onSquareClick={() => handleClick(7)} />
        <Square value={8} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default Board;