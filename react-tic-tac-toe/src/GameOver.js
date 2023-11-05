function GameOver({ stateSetters, gameResult }) {
  return (
    <div>
      <h1>Game Over</h1>
      <p>{gameResult}</p>
      <button onClick={(e) => {
        e.preventDefault();
        stateSetters.appState('menu');
      }}>Back to Menu</button>
    </div>
  );
}

export default GameOver;
