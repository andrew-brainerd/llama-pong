import React, { useState } from 'react';
import { number, shape, string, bool, func } from 'prop-types';
import { NUM_GAMES } from '../../constants/pong';
import Button from '../common/Button/Button';
import PlayerModal from '../Players/PlayerModal/container';
import styles from './NewGame.module.scss';

const NewGame = ({ numGames, player1, player2, isCreatingGame, updateConfig, createGame }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={styles.newGame}>
        <div className={styles.buttonContainer}>
          <Button
            className={[
              styles.button,
              styles.gameTypeButton
            ].join(' ')}
            onClick={() => updateConfig(NUM_GAMES, 1)}
            selected={numGames === 1}
          >
            1 Game
          </Button>
          <Button
            className={[
              styles.button,
              styles.gameTypeButton
            ].join(' ')}
            onClick={() => updateConfig(NUM_GAMES, 3)}
            selected={numGames === 3}
          >
            Best of 3
          </Button>
          <Button
            className={[
              styles.button,
              styles.gameTypeButton
            ].join(' ')}
            onClick={() => updateConfig(NUM_GAMES, 5)}
            selected={numGames === 5}
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
            selected={selectedPlayer === 1}
          />
          <Button
            className={styles.playerName}
            text={player2 ? player2.name : 'Select Player 2'}
            onClick={() => {
              setSelectedPlayer(2);
              setIsModalOpen(true);
            }}
            selected={selectedPlayer === 2}
          />
        </div>
        <Button
          className={[
            styles.button,
            styles.startButton
          ].join(' ')}
          onClick={() => createGame(player1, player2)}
          disabled={!player1 || !player2 || isCreatingGame}
          applyTheme={false}
        >
          {isCreatingGame ? 'Creating Game...' : 'Start Game'}
        </Button>
      </div>
      {isModalOpen &&
        <PlayerModal
          playerNum={selectedPlayer}
          closeModal={() => {
            setSelectedPlayer(null);
            setIsModalOpen(false);
          }}
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
  isCreatingGame: bool,
  navTo: func.isRequired,
  updateConfig: func.isRequired,
  createGame: func.isRequired
};

export default NewGame;
