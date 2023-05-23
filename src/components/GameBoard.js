import React, { useContext, useEffect, useState } from "react";
import { TilesContext } from "../context/tilesContext";
import Cell from "./Cell";
import Tile from "./Tile";

const GameBoard = () => {
  const [boardCells, setBoardCells] = useState(() =>
    Array(16)
      .fill({})
      .map((_, index) => {
        return { id: index + 1, content: null };
      })
  );

  const { tiles, startGame } = useContext(TilesContext);
  useEffect(() => startGame(2), []);

  return (
    <div className="relative grid grid-cols-4 grid-rows-4 gap-4">
      {tiles.map((tile) => (
        <Tile
          key={tile.id}
          value={tile.value}
          position={tile.position}
        />
      ))}
      {boardCells.map((cell) => (
        <Cell
          key={cell.id}
          value={cell.content}
        />
      ))}
    </div>
  );
};

export default GameBoard;
