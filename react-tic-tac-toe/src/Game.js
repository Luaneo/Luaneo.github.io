import './Game.css';
import { useState } from 'react';

function Game({ stateSetters }) {
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);
  // cross, nougth
  const [turn, setTurn] = useState('cross');

  function ckeckForWinner(board) {
    console.log(board, 'in checkForWinner');
    let winner = null;

    // check rows
    for (let i = 0; i < 3; i++) {
      if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        winner = board[i][0];
      }
    }

    // check columns
    for (let i = 0; i < 3; i++) {
      if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        winner = board[0][i];
      }
    }

    // check diagonals
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      winner = board[0][0];
    }

    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      winner = board[0][2];
    }

    if (winner) {
      return {
        'x': 'cross wins',
        'o': 'nought wins'
      }[winner];
    }

    // check for tie
    let isTie = true;
    for (let i = 0; i < 3; i++) {
      if (board[i].includes('')) {
        isTie = false;
      }
    }
    if (isTie) {
      return 'tie';
    }

    return 'in progress';
  }

  return (
    <div className='Game'>
      <h1>Game</h1>
      <p>Turn: {turn}</p>
      {board.map((row, i) => <div key={i} className='board-row'>
        {row.map((cell, j) => <div key={j} className='board-cell' onClick={(e) => {
          e.preventDefault();
          if (cell) {
            alert('cell already taken');
            return;
          }
          let newBoard = [...board];
          newBoard[i][j] = turn === 'cross' ? 'x' : 'o';
          setBoard(newBoard);
          setTurn(turn === 'cross' ? 'nought' : 'cross');
          let result = ckeckForWinner(board);
          console.log(result, 'result');
          if (['cross wins', 'nought wins', 'tie'].includes(result)) {
            stateSetters.appState('gameover');
            stateSetters.gameResult(result);
          }
        }}>
          {cell}
        </div>)}
      </div>
      )}
      <button onClick={(e) => {
        stateSetters.appState('gameover');
        stateSetters.gameResult('shut down');
      }}>End Game</button>
    </div>
  );
}

export default Game;
