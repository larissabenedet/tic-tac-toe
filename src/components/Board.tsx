import React from "react";
import { BoardState, Player } from "../types.js";
import Square from "./Square.jsx";
import { WINNING_COMBINATIONS } from "../helpers/game-logic.js";

type BoardProps = {
  board: BoardState;
  handleSquareClick: (index: number) => void;
  winner: Player | null;
};

function Board({ board, handleSquareClick, winner }: BoardProps) {
  const isWinner = (index: number): boolean => {
    if (!winner) return false;

    // check if the current index is a part of the winning combination
    // and if all the squares in the combination are occupied by the winner (ex: X or O)
    return WINNING_COMBINATIONS.some((combination) => {
      return (
        combination.includes(index) &&
        combination.every((i) => board[i] === winner)
      );
    });
  };

  return (
    <div className="mx-auto mt-5 grid max-w-[26rem] grid-cols-3 gap-4">
      {board.map((square, index) => {
        return (
          <Square
            key={index}
            value={square}
            onClick={() => handleSquareClick(index)}
            isWinner={isWinner(index)}
          />
        );
      })}
    </div>
  );
}

export default Board;
