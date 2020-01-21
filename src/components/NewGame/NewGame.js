import React, { useState } from 'react';
import { number, shape, string, func } from 'prop-types';
import { GAME_ROUTE } from '../../constants/routes';
import { NUM_GAMES } from '../../constants/pong';
import Button from '../common/Button/Button';
import PlayerModal from '../Players/PlayerModal/container';
import styles from './NewGame.module.scss';

const NewGame = ({ numGames, player1, player2, isCreatingGame, updateConfig, createGame }) => {
  const gameId = '00000';
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            disabled
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
            disabled
          >
            Best of 5
          </Button>
        </div>
        <div className={styles.playersContainer}>
          <Button
            className={styles.playerName}
            text={player1 ? player1.name : 'Select Player 1'}
            onClick={() => {
              setSelectedPlayer(1);
              setIsModalOpen(true);
            }}
          />
          <Button
            className={styles.playerName}
            text={player2 ? player2.name : 'Select Player 2'}
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
          onClick={() => createGame(player1, player2)}
          disabled={!player1 || !player2 || isCreatingGame}
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
  createGame: func.isRequired
};

export default NewGame;
