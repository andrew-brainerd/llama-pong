import React from 'react';
import { number, func } from 'prop-types';
import { GAME_ROUTE } from '../../constants/routes';
import { NUM_GAMES } from '../../constants/pong';
import Button from '../common/Button/Button';
import styles from './NewGame.module.scss';

const NewGame = ({ numGames, navTo, updateConfig, startGame }) => {
  const gameId = '00000';

  return (
    <div className={styles.newGame}>
      {/* <h1>Start A New Game</h1> */}
      <div className={styles.buttonContainer}>
        <Button
          className={[
            styles.button,
            styles.gameTypeButton,
            numGames === 1 ? styles.selected : ''
          ].join(' ')}
          onClick={() => updateConfig(NUM_GAMES, 1)}
        >
          1 Game
        </Button>
        <Button
          className={[
            styles.button,
            styles.gameTypeButton,
            numGames === 3 ? styles.selected : ''
          ].join(' ')}
          onClick={() => updateConfig(NUM_GAMES, 3)}
        >
          Best of 3
        </Button>
        <Button
          className={[
            styles.button,
            styles.gameTypeButton,
            numGames === 5 ? styles.selected : ''
          ].join(' ')}
          onClick={() => updateConfig(NUM_GAMES, 5)}
        >
          Best of 5
        </Button>
      </div>
      <Button
        className={[
          styles.button,
          styles.startButton
        ].join(' ')}
        onClick={() => {
          startGame();
          navTo(GAME_ROUTE.replace(':gameId', gameId));
        }}
      >
        Start Game
      </Button>
    </div>
  );
};

NewGame.propTypes = {
  numGames: number,
  navTo: func.isRequired,
  updateConfig: func.isRequired,
  startGame: func.isRequired
};

export default NewGame;
