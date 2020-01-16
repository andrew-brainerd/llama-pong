const BASE_WIN_SCORE = 3;
const WIN_MARGIN = 2;

export const isScoreValid = score => {
  if (score < 0) {
    return false;
  }

  return true;
};

export const getGameStatus = ({ currentScore }) => {
  const { player1, player2 } = currentScore || {};
  const gameStatus = {};

  if (player1 >= BASE_WIN_SCORE) {
    if (player2 <= player1 - WIN_MARGIN) {
      gameStatus.isGameOver = true;
      gameStatus.winningPlayerNum = 1;
    } else {
      gameStatus.isGameOver = false;
    }
  } else if (player2 >= BASE_WIN_SCORE) {
    if (player1 <= player2 - WIN_MARGIN) {
      gameStatus.isGameOver = true;
      gameStatus.winningPlayerNum = 2;
    } else {
      gameStatus.isGameOver = false;
    }
  }

  return gameStatus;
};
