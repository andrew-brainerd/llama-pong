import React from 'react';
import { number, shape, string, func } from 'prop-types';
import { isScoreValid } from '../../../utils/scoring';
import styles from './Scoreboard.module.scss';

const Scoreboard = ({ height, player1, player2, currentScore, updateScore }) => {
  const { player1: player1Score, player2: player2Score } = currentScore || {};
  const { name: player1Name } = player1 || {};
  const { name: player2Name } = player2 || {};

  return (
    <div className={styles.scoreboard} style={{ height }}>
      <div className={[styles.playerScore, styles.player1Score].join(' ')}>
        <div className={styles.playerName}>{player1Name}</div>
        <div
          className={styles.incrementScore}
          onClick={() => isScoreValid(player1Score + 1) && updateScore(1, player1Score + 1)}
        >
          <div className={styles.arrow}>&gt;</div>
        </div>
        <div className={styles.score}>
          {player1Score}
        </div>
        <div
          className={styles.decrementScore}
          onClick={() => isScoreValid(player1Score - 1) && updateScore(1, player1Score - 1)}
        >
          <div className={styles.arrow}>&gt;</div>
        </div>
      </div>
      <div className={[styles.playerScore, styles.player2Score].join(' ')}>
        <div className={styles.playerName}>{player2Name}</div>
        <div
          className={styles.incrementScore}
          onClick={() => isScoreValid(player2Score + 1) && updateScore(2, player2Score + 1)}
        >
          <div className={styles.arrow}>&gt;</div>
        </div>
        <div className={styles.score}>
          {player2Score}
        </div>
        <div
          className={styles.decrementScore}
          onClick={() => isScoreValid(player2Score - 1) && updateScore(2, player2Score - 1)}
        >
          <div className={styles.arrow}>&gt;</div>
        </div>
      </div>
    </div>
  );
};

Scoreboard.propTypes = {
  height: number,
  player1: shape({
    _id: string,
    name: string
  }),
  player2: shape({
    _id: string,
    name: string
  }),
  currentScore: shape({
    player1Score: number,
    player2Score: number
  }),
  updateScore: func.isRequired
};

export default Scoreboard;
