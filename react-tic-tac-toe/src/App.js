import './App.css';
import { useState } from 'react';

import Menu from './Menu.js';
import Game from './Game.js';
import GameOver from './GameOver.js';

function App() {
  // menu, game, gameover
  const [appState, setAppState] = useState('menu')
  
  // not begun, in progress, cross wins, nought wins, tie, shut down
  const [gameResult, setGameResult] = useState('not begun');

  const stateSetters = {
    appState: setAppState,
    gameResult: setGameResult
  }

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      {appState === 'menu' && <Menu stateSetters={stateSetters} />}
      {appState === 'game' && <Game stateSetters={stateSetters} />}
      {appState === 'gameover' && <GameOver stateSetters={stateSetters} gameResult={gameResult} />}
    </div>
  );
}

export default App;
