import React from 'react';
import { func } from 'prop-types';
import { GAME_ROUTE } from '../../constants/routes';
import Button from '../common/Button/Button';
import styles from './Game.module.scss';

const Game = ({ navTo }) => {
  const gameId = '00000';

  return (
  <div className={styles.game}>
    <div className={styles.scoreboard}>
      Scores Go Here
    </div>
  </div>
);
  };

Game.propTypes = {
  navTo: func.isRequired
};

export default Game;
