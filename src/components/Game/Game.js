import React from 'react';
import { number, shape, func } from 'prop-types';
import styles from './Game.module.scss';

const HEADER_HEIGHT = 120;

const Game = ({ height, scoreboard, navTo }) => {
  const scoreBoardHeight = height - 1.5 * HEADER_HEIGHT;
  const { player1, player2 } = scoreboard;

  return (
    <div className={styles.game}>
      <div className={styles.scoreboard} style={{ height: scoreBoardHeight }}>
        <div className={styles.playerScore}>
          <div className={styles.score}>{player1}</div>
        </div>
        <hr style={{ height: scoreBoardHeight - 20 }} />
        <div className={styles.playerScore}>
          <div className={styles.score}>{player2}</div>
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
