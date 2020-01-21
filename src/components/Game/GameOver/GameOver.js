import React from 'react';
import { shape, string, number, func } from 'prop-types';
import Button from '../../common/Button/Button';
import styles from './GameOver.module.scss';

const GameOver = ({ player1, player2, winningPlayerNum, playAgain }) => {
  const { name: player1Name } = player1 || {};
  const { name: player2Name } = player2 || {};
  const winner = winningPlayerNum === 1 ? player1Name : player2Name;

  return (
    <div className={styles.gameOver}>
      <div className={styles.message}>Game Over</div>
      <div className={styles.winner}>{winner} Wins!</div>
      <Button
        className={styles.playAgainButton}
        text={'Play Again'}
        onClick={playAgain}
      />
    </div>
  );
};

GameOver.propTypes = {
  player1: shape({
    _id: string,
    name: string
  }),
  player2: shape({
    _id: string,
    name: string
  }),
  winningPlayerNum: number.isRequired,
  playAgain: func.isRequired
};

export default GameOver;
