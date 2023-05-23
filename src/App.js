import Control from "./components/Control/Control";
import GameBoard from "./components/GameBoard";
import { TilesContextProvider } from "./context/tilesContext";

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-stone-700">
      <TilesContextProvider>
        <GameBoard />
        <Control />
      </TilesContextProvider>
    </div>
  );
}

export default App;
