import React from 'react';
import { number, shape, func } from 'prop-types';
import { isScoreValid } from '../../../utils/scoring';
import styles from './Scoreboard.module.scss';

const Scoreboard = ({ height, currentScore: { player1, player2 }, updateScore }) => {
  return (
    <div className={styles.scoreboard} style={{ height }}>
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
      <hr style={{ height: height - 10 }} />
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
  );
};

Scoreboard.propTypes = {
  height: number,
  currentScore: shape({
    player1: number,
    player2: number
  }),
  updateScore: func.isRequired
};

export default Scoreboard;
