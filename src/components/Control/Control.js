import React, { useContext, useMemo } from "react";
import { TilesContext } from "../../context/tilesContext";
import ControlButton from "./ControlButton";

const Control = () => {
  const { moveUp, moveDown, moveLeft, moveRight } = useContext(TilesContext);
  const memoizedControlButtons = useMemo(
    () => [
      { id: 1, action: moveLeft, innerContent: "⬅" },
      { id: 2, action: moveUp, innerContent: "⬆" },
      { id: 3, action: moveDown, innerContent: "⬇" },
      { id: 4, action: moveRight, innerContent: "➡" },
    ],
    [moveUp, moveLeft, moveRight, moveDown]
  );

  return (
    <div className="flex gap-4">
      {memoizedControlButtons.map((button) => (
        <ControlButton
          key={button.id}
          innerContent={button.innerContent}
          action={button.action}
        />
      ))}
    </div>
  );
};

export default Control;
