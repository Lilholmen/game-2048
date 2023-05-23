import React from "react";

const Cell = ({ value }) => {
  return <div className="h-40 w-40 rounded-xl bg-stone-500">{value}</div>;
};

export default Cell;
