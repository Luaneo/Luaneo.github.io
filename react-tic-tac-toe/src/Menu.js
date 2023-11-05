function Menu({ stateSetters }) {
  return (
    <div>
      <h1>Menu</h1>
      <button onClick={(e) => {
        e.preventDefault();
        stateSetters.appState('game');
        stateSetters.gameResult('in progress');
      }}>Start Game</button>
    </div>
  );
}

export default Menu;
