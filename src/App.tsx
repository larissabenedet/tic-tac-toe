import React from "react";
import { Gamepad2, RotateCcw } from "lucide-react";
import Board from "./components/Board.jsx";
import { useState } from "react";
import { BoardState } from "./types.js";
import { checkWinner, isBoardFull } from "./helpers/game-logic.js";

function App() {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  const winner = checkWinner(board);
  const isDraw = isBoardFull(board) && !winner;

  const currentPlayer =
    board.filter((square) => square !== null).length % 2 === 0 ? "X" : "O";

  const handleSquareClick = (index: number) => {
    if (winner || board[index] !== null) return;
    setBoard(board.map((square, i) => (i === index ? currentPlayer : square)));
  };

  const handleRestartGame = () => {
    setBoard(Array(9).fill(null));
  };

  const getGameStatus = () => {
    if (winner) return `Player ${winner} wins!`;
    if (isDraw) return "It's a draw!";
    return `Player ${currentPlayer}'s Turn`;
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
            {getGameStatus()}
          </p>
        </div>
        <Board
          board={board}
          handleSquareClick={handleSquareClick}
          winner={winner}
        />
        {(winner || isDraw) && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleRestartGame}
              className="group bg-pink flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Restart Game
              <RotateCcw className="transition-transform duration-500 group-hover:-rotate-180" />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
