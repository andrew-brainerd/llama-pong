import React, { useState } from 'react';
import { number, bool, func } from 'prop-types';
import TextInput from '../../common/TextInput/TextInput';
import Button from '../../common/Button/Button';
import styles from './NewPlayer.module.scss';

const NewPlayer = ({ playerNum, isCreatingPlayer, createPlayer, closeModal }) => {
  const [playerName, setPlayerName] = useState('');

  return (
    <div className={styles.newPLayer}>
      <TextInput
        placeholder={'Enter player name'}
        onChange={setPlayerName}
        onPressEnter={() => {
          createPlayer(playerName, playerNum);
          !isCreatingPlayer && closeModal();
        }}
      />
      <Button
        className={styles.createPlayerButton}
        text={'Create Player'}
        onClick={() => {
          createPlayer(playerName, playerNum);
          !isCreatingPlayer && closeModal();
        }}
        disabled={isCreatingPlayer}
      />
    </div>
  );
};

NewPlayer.propTypes = {
  playerNum: number,
  isCreatingPlayer: bool,
  createPlayer: func.isRequired,
  closeModal: func.isRequired
};

export default NewPlayer;
