import React from 'react';
import { number, func } from 'prop-types';
import { GAME_ROUTE } from '../../constants/routes';
import { NUM_GAMES, PLAYER1, PLAYER2 } from '../../constants/pong';
import Button from '../common/Button/Button';
import TextInput from '../common/TextInput/TextInput';
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
      <div className={styles.playersContainer}>
        <TextInput
          placeholder={'Player 1'}
          onChange={value => updateConfig(PLAYER1, value)}
          inputClassName={styles.playerInput}
        />
        <TextInput
          placeholder={'Player 2'}
          onChange={value => updateConfig(PLAYER2, value)}
          inputClassName={styles.playerInput}
        />
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
