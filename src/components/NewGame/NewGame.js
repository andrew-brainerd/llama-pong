import React, { useState } from 'react';
import { number, shape, string, func } from 'prop-types';
import QrReader from 'react-qr-reader';
import { GAME_ROUTE } from '../../constants/routes';
import { NUM_GAMES, PLAYER1, PLAYER2 } from '../../constants/pong';
import Button from '../common/Button/Button';
import TextInput from '../common/TextInput/TextInput';
import styles from './NewGame.module.scss';

const NewGame = ({ numGames, player1, player2, setPlayer, navTo, updateConfig, startGame }) => {
  const gameId = '00000';
  const [player1Error, setPlayer1Error] = useState(null);
  const [player2Error, setPlayer2Error] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const validate = () => {
    !player1 ? setPlayer1Error('Please enter a name for Player 1') : setPlayer1Error(null);
    !player2 ? setPlayer2Error('Please enter a name for Player 2') : setPlayer2Error(null);

    return !!player1 && !!player2;
  };

  return (
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
        <TextInput
          placeholder={'Player 1'}
          value={(player1 || {}).name}
          onChange={value => updateConfig(PLAYER1, value)}
          onFocus={() => setSelectedPlayer(1)}
          onBlur={() => setSelectedPlayer(null)}
          inputClassName={styles.playerInput}
          error={player1Error}

        />
        <TextInput
          placeholder={'Player 2'}
          value={(player2 || {}).name}
          onChange={value => updateConfig(PLAYER2, value)}
          onFocus={() => setSelectedPlayer(2)}
          onBlur={() => setSelectedPlayer(null)}
          inputClassName={styles.playerInput}
          error={player2Error}
        />
        {selectedPlayer &&
          <div className={styles.qrReader}>
            <QrReader
              style={{ height: 200, width: 200 }}
              showViewFinder
              mirrorVideo
              delay={300}
              onScan={data => data && setPlayer(selectedPlayer, data)}
              onError={error => console.error('QR Error', error)}
            />
          </div>}
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
