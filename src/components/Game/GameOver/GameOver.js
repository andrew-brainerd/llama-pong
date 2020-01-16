import React from 'react';
import { number, func } from 'prop-types';
import Button from '../../common/Button/Button';
import styles from './GameOver.module.scss';

const GameOver = ({ winningPlayerNum, playAgain }) => {
  return (
    <div className={styles.gameOver}>
      <div className={styles.message}>Game Over</div>
      <div className={styles.winner}>Player {winningPlayerNum} Wins!</div>
      <Button
        className={styles.playAgainButton}
        text={'Play Again'}
        onClick={playAgain}
      />
    </div>
  );
};

GameOver.propTypes = {
  winningPlayerNum: number.isRequired,
  playAgain: func.isRequired
}

export default GameOver;
