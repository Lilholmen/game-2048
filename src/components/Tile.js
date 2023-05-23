import React, { useState } from "react";

const getRandomPosition = () => {
  return Math.round(Math.random() * 3);
};

const Tile = ({ value, position }) => {
  return (
    <div
      className="absolute flex h-40 w-40 items-center justify-center rounded-xl bg-emerald-700 text-7xl font-bold transition-all duration-300 ease-in-out"
      style={{ top: 176 * position.v, left: 176 * position.h }}
    >
      {value}
    </div>
  );
};

export default Tile;
