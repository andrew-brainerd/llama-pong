import React, { useState } from 'react';
import { number, shape, string, func } from 'prop-types';
import { GAME_ROUTE } from '../../constants/routes';
import { NUM_GAMES, PLAYER1, PLAYER2 } from '../../constants/pong';
import Button from '../common/Button/Button';
import PlayerModal from '../Players/PlayerModal/container';
import styles from './NewGame.module.scss';

const NewGame = ({ numGames, player1, player2, setPlayer, navTo, updateConfig, startGame }) => {
  const gameId = '00000';
  const [player1Error, setPlayer1Error] = useState(null);
  const [player2Error, setPlayer2Error] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const validate = () => {
    !player1 ? setPlayer1Error('Please enter a name for Player 1') : setPlayer1Error(null);
    !player2 ? setPlayer2Error('Please enter a name for Player 2') : setPlayer2Error(null);

    return !!player1 && !!player2;
  };

  return (
    <>
      <div className={styles.newGame}>
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
          <Button
            className={styles.playerName}
            text={player1 ? player1.name : 'Player 1'}
            onClick={() => {
              setSelectedPlayer(1);
              setIsModalOpen(true);
            }}
          />
          <Button
            className={styles.playerName}
            text={player2 ? player2.name : 'Player 2'}
            onClick={() => {
              setSelectedPlayer(2);
              setIsModalOpen(true);
            }}
          />
        </div>
        <Button
          className={[
            styles.button,
            styles.startButton
          ].join(' ')}
          onClick={() => {
            if (validate()) {
              startGame();
              navTo(GAME_ROUTE.replace(':gameId', gameId));
            }
          }}
        >
          Start Game
      </Button>
      </div>
      {isModalOpen &&
        <PlayerModal
          playerNum={selectedPlayer}
          closeModal={() => setIsModalOpen(false)}
        />}
    </>
  );
};

NewGame.propTypes = {
  numGames: number,
  player1: shape({
    _id: string,
    name: string
  }),
  player2: shape({
    _id: string,
    name: string
  }),
  navTo: func.isRequired,
  updateConfig: func.isRequired,
  startGame: func.isRequired
};

export default NewGame;
