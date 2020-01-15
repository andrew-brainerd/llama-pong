import React, { useState, useEffect } from 'react';
import { number, shape, func } from 'prop-types';
import { useSpeechSynthesis } from 'react-speech-kit';
import { isScoreValid } from '../../utils/scoring';
import styles from './Game.module.scss';

const HEADER_HEIGHT = 120;
const gameStartMessage = 'Welcome to LLama Pong. Lets get the game started!';

const Game = ({ height, scoreboard, navTo, updateScore }) => {
  const [isNewGame, setIsNewGame] = useState(true);
  const { speak } = useSpeechSynthesis();
  const scoreBoardHeight = height - 1.5 * HEADER_HEIGHT;
  const { currentScore: { player1, player2 } } = scoreboard;

  useEffect(() => {
    if (isNewGame) { // && player1 === 0 && player2 === 0
      // speak({ text: gameStartMessage });
      console.log(`%c${gameStartMessage}`, 'color: orange; font-size: 24px');
      setIsNewGame(false);
    }
  }, [isNewGame, speak]);

  return (
    <div className={styles.game}>
      <div className={styles.scoreboard} style={{ height: scoreBoardHeight }}>
        <div className={styles.playerScore}>
          <div
            className={styles.incrementScore}
            onClick={() => isScoreValid(player1 + 1) && updateScore(1, player1 + 1)}
          >
            <div className={styles.arrow}>&gt;</div>
          </div>
          <div className={styles.score}>
            {player1}
          </div>
          <div
            className={styles.decrementScore}
            onClick={() => isScoreValid(player1 - 1) && updateScore(1, player1 - 1)}
          >
            <div className={styles.arrow}>&gt;</div>
          </div>
        </div>
        <hr style={{ height: scoreBoardHeight - 20 }} />
        <div className={styles.playerScore}>
          <div
            className={styles.incrementScore}
            onClick={() => isScoreValid(player2 + 1) && updateScore(2, player2 + 1)}
          >
            <div className={styles.arrow}>&gt;</div>
          </div>
          <div className={styles.score}>
            {player2}
          </div>
          <div
            className={styles.decrementScore}
            onClick={() => isScoreValid(player2 - 1) && updateScore(2, player2 - 1)}
          >
            <div className={styles.arrow}>&gt;</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Game.propTypes = {
  height: number,
  scoreboard: shape({
    player1: number,
    player2: number
  }),
  navTo: func.isRequired,
  updateScore: func.isRequired
};

export default Game;
