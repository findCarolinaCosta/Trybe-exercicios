import React, { useContext } from 'react';
import Context from './context/Context';
import GameBoard from './GameBoard';

function TicTacToe() {
  const {
    activePlayer,
    setActivePlayer,
    gameBoard,
    setGameBoard, 
  } = useContext(Context)

  const toggleActivePlayer = () => setActivePlayer(activePlayer === 1 ? 2 : 1);

  const updateState = (cellClicked) => {
    if (gameBoard[cellClicked] !== 0) return false;

    let newGameBoard = [...gameBoard];
    newGameBoard[cellClicked] = activePlayer;
    setGameBoard(newGameBoard);
    toggleActivePlayer();
  };

  const victoryArchivedInLine = () => {
    for (let i = 0; i <= 6; i += 3) {
      if (
        gameBoard[i] === gameBoard[i + 1] &&
        gameBoard[i + 1] === gameBoard[i + 2] &&
        gameBoard[i] !== 0
      )
        return true;
    }
    return false;
  };

  const victoryArchivedInColumn = () => {
    for (let i = 0; i <= 2; i++) {
      if (
        gameBoard[i] === gameBoard[i + 3] &&
        gameBoard[i + 3] === gameBoard[i + 6] &&
        gameBoard[i] !== 0
      )
        return true;
    }
    return false;
  };

  const resetGame = () => {
    setActivePlayer(1)
    setGameBoard([0, 0, 0, 0, 0, 0, 0, 0, 0])
  }

  const renderButton = () => {
    return (
      <button
        type="button"
        onClick={resetGame}
        data-testid="restart-button"
      >
        Recomeçar Jogo
      </button>
    );
  }

  const victoryArchivedInDiagonals = () => {
    if (gameBoard[4] === 0) return false;
    if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) return true;
    if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) return true;
    return false;
  };

  const victoryArchieved = () => {
    return (
      victoryArchivedInLine() || victoryArchivedInColumn() || victoryArchivedInDiagonals()
    );
  };
  const calculateWinner = (gameCurrent) => {
    const possibilities = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < possibilities.length; i++) {
      const [a, b, c] = possibilities[i];
      if (gameCurrent[a] && gameCurrent[a] === gameCurrent[b] && gameCurrent[a] === gameCurrent[c]) {
        return gameCurrent[a];
      }
    }
    return null;
  } // fonte: https://cibersistemas.pt/tecnologia/aprenda-a-construir-o-jogo-da-velha-com-ganchos-de-reacao/

  const win = victoryArchieved();
    if (!gameBoard.includes(0) && !win) {
      return (
        <>
          {renderButton()}
          <h1>Empate</h1>
        </>
      );
    }
    return (
      <>
        {renderButton()}
        {(!win)
          ? (
            <GameBoard
              gameState={gameBoard}
              updateGame={updateState}
            />
          )
          : <h1>{`Player ${calculateWinner(gameBoard) === 2 ? 'O' : 'X'} Ganhou`}</h1>}
      </>
    );
}

export default TicTacToe;