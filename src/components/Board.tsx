import React from "react";
import { BoardState } from "../types.js";
import Square from "./Square.jsx";

type BoardProps = {
  board: BoardState;
  handleSquareClick: (index: number) => void;
};

function Board({ board, handleSquareClick }: BoardProps) {
  return (
    <div className="mx-auto mt-5 grid max-w-[26rem] grid-cols-3 gap-4">
      {board.map((square, index) => {
        return (
          <Square
            key={index}
            value={square}
            onClick={() => handleSquareClick(index)}
          />
        );
      })}
    </div>
  );
}

export default Board;
