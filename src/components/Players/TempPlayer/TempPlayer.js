import React, { useState } from 'react';
import { number, func } from 'prop-types';
import { PLAYER1, PLAYER2 } from '../../../constants/pong';
import TextInput from '../../common/TextInput/TextInput';
import Button from '../../common/Button/Button';
import styles from './TempPlayer.module.scss';

const TempPlayer = ({ playerNum, updateConfig, closeModal }) => {
  const [playerName, setPlayerName] = useState('');
  const configKey = playerNum === 1 ? PLAYER1 : PLAYER2;

  const tempPlayer = {
    playerId: '0',
    name: playerName
  };

  return (
    <div className={styles.newPLayer}>
      <TextInput
        placeholder={'Enter player name'}
        value={playerName}
        onChange={setPlayerName}
        onPressEnter={() => {
          updateConfig(configKey, tempPlayer);
          closeModal();
        }}
      />
      <Button
        className={styles.createPlayerButton}
        text={'Set Temporary Name'}
        onClick={() => {
          updateConfig(configKey, tempPlayer);
          closeModal();;
        }}
        disabled={playerName === ''}
      />
    </div>
  );
};

TempPlayer.propTypes = {
  playerNum: number.isRequired,
  updateConfig: func.isRequired,
  closeModal: func.isRequired
};

export default TempPlayer;
