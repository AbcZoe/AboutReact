import React from "react";
import { useState } from "react";
import './tictactoe.css';

function Square({ value, onSquareClick, highlight }) {
    return (
      <button
        className={`square ${highlight ? 'highlight' : ''}`}
        onClick={onSquareClick}
      >
        {value}
      </button>
    );
  }

export default Square