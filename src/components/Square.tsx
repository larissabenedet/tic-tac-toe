import React from "react";
import { Player } from "../types";
import { motion } from "motion/react";

type SquareProps = {
  value: Player | null;
  onClick: () => void;
  isWinner: boolean;
};

const getTextColor = (value: Player | null) =>
  value === "X" ? "text-pink" : "text-white";

const getBorderColor = (value: Player | null, isWinner: boolean) => {
  if (!isWinner) return "border-gray-200";
  if (value === "X") return "border-pink";
  return "border-white";
};

function Square({ value, onClick, isWinner }: SquareProps) {
  return (
    <motion.button
      className={`h-32 w-32 rounded-xl border-4 border-gray-200 text-4xl font-bold ${getTextColor(value)} ${getBorderColor(value, isWinner)}`}
      onClick={onClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      {value && (
        <motion.span
          className="block"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
        >
          {value}
        </motion.span>
      )}
    </motion.button>
  );
}

export default Square;
