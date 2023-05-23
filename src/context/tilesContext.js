import { createContext, useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "START") {
    const newTiles = [];

    for (let i = 0; i < action.initialAmount; i++) {
      newTiles.push({
        id: "tile" + i,
        value: Math.random() < 0.5 ? 2 : 4,
        position: {
          h: Math.round(Math.random() * 3),
          v: Math.round(Math.random() * 3),
        },
      });
    }
    return newTiles;
  }

  if (action.type === "MOVE_UP") {
    return state.map((tile) => {
      return { ...tile, position: { ...tile.position, v: 0 } };
    });
  }

  if (action.type === "MOVE_DOWN") {
    return state.map((tile) => {
      return { ...tile, position: { ...tile.position, v: 3 } };
    });
  }

  if (action.type === "MOVE_LEFT") {
    return state.map((tile) => {
      return { ...tile, position: { ...tile.position, h: 0 } };
    });
  }

  if (action.type === "MOVE_RIGHT") {
    return state.map((tile) => {
      return { ...tile, position: { ...tile.position, h: 3 } };
    });
  }
};

export const TilesContext = createContext(null);

export const TilesContextProvider = ({ children }) => {
  const [tiles, dispatchTiles] = useReducer(reducer, []);

  const startGame = (initialTiles) => {
    dispatchTiles({ type: "START", initialAmount: initialTiles });
  };

  const moveUp = () => {
    dispatchTiles({ type: "MOVE_UP" });
  };

  const moveDown = () => {
    dispatchTiles({ type: "MOVE_DOWN" });
  };

  const moveLeft = () => {
    dispatchTiles({ type: "MOVE_LEFT" });
  };

  const moveRight = () => {
    dispatchTiles({ type: "MOVE_RIGHT" });
  };

  return (
    <TilesContext.Provider
      value={{ tiles, startGame, moveUp, moveDown, moveLeft, moveRight }}
    >
      {children}
    </TilesContext.Provider>
  );
};
