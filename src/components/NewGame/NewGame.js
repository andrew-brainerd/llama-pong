import React from 'react';
import { func } from 'prop-types';
import { GAME_ROUTE } from '../../constants/routes';
import Button from '../common/Button/Button';
import styles from './NewGame.module.scss';

const NewGame = ({ navTo }) => {
  const gameId = '00000';

  return (
    <div className={styles.newGame}>
      {/* <h1>Start A New Game</h1> */}
      <div className={styles.buttonContainer}>
        <Button
          className={styles.gameTypeButton}
          onClick={() => navTo(GAME_ROUTE.replace(':gameId', gameId))}
        >
          1 Game
        </Button>
        <Button
          className={styles.gameTypeButton}
          onClick={() => navTo(GAME_ROUTE.replace(':gameId', gameId))}
        >
          Best of 3
        </Button>
        <Button
          className={styles.gameTypeButton}
          onClick={() => navTo(GAME_ROUTE.replace(':gameId', gameId))}
        >
          Best of 5
        </Button>
      </div>
      {/* <Button
        className={styles.button}
        onClick={() => navTo(GAME_ROUTE.replace(':gameId', gameId))}
      >
        Start Game
      </Button> */}
    </div>
  );
};

NewGame.propTypes = {
  navTo: func.isRequired
};

export default NewGame;
