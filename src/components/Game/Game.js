import React, { useState } from 'react';
import { number, shape, func } from 'prop-types';
import styles from './Game.module.scss';

const HEADER_HEIGHT = 120;

const Game = ({ height, scoreboard, navTo }) => {
  const [player1Score, setPlayer1Score] = useState(5);
  const [player2Score, setPlayer2Score] = useState(8);
  const scoreBoardHeight = height - 1.5 * HEADER_HEIGHT;
  const { player1, player2 } = scoreboard;

  return (
    <div className={styles.game}>
      <div className={styles.scoreboard} style={{ height: scoreBoardHeight }}>
        <div className={styles.playerScore}>
        <div
            className={styles.incrementScore}
            onClick={() => setPlayer1Score(player1Score + 1)}
          >
            <div className={styles.arrow}>></div>
          </div>
          <div className={styles.score}
          >
            {player1Score}
          </div>
          <div
            className={styles.decrementScore}
            onClick={() => setPlayer1Score(player1Score - 1)}
          >
            <div className={styles.arrow}>></div>
          </div>
        </div>
        <hr style={{ height: scoreBoardHeight - 20 }} />
        <div className={styles.playerScore}>
          <div
            className={styles.incrementScore}
            onClick={() => setPlayer2Score(player2Score + 1)}
          >
            <div className={styles.arrow}>></div>
          </div>
          <div className={styles.score}>
            {player2Score}
          </div>
          <div
            className={styles.decrementScore}
            onClick={() => setPlayer2Score(player2Score - 1)}
          >
            <div className={styles.arrow}>></div>
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
  navTo: func.isRequired
};

export default Game;
