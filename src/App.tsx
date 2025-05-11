import React from "react";
import { Gamepad2 } from "lucide-react";
import Board from "./components/Board.jsx";
import { useState } from "react";
import { BoardState } from "./types.js";

function App() {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));

  const currentPlayer =
    board.filter((square) => square !== null).length % 2 === 0 ? "X" : "O";

  const handleSquareClick = (index: number) => {
    setBoard(board.map((square, i) => (i === index ? currentPlayer : square)));
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-blue-200">
      <div className="w-full max-w-lg rounded-2xl bg-blue-100 p-8 text-center">
        <div className="mb-8 flex items-center justify-center gap-2">
          <Gamepad2 className="text-pink h-8 w-8" />
          <h1 className="text-4xl font-bold text-white">Tic Tac Toe</h1>
        </div>

        <div>
          <p className="text-xl font-semibold text-gray-100">
            Player {currentPlayer}'s Turn
          </p>
        </div>

        <Board board={board} handleSquareClick={handleSquareClick} />
      </div>
    </main>
  );
}

export default App;
