import React, { useState } from 'react';
import { func } from 'prop-types';
import TextInput from '../../common/TextInput/TextInput';
import Button from '../../common/Button/Button';
import styles from './NewPlayer.module.scss';

const NewPlayer = ({ playerNum, createPlayer }) => {
  const [playerName, setPlayerName] = useState('');

  return (
    <div className={styles.newPLayer}>
      <TextInput
        placeholder={'Enter player name'}
        onChange={setPlayerName}
        onPressEnter={() => createPlayer(playerName, playerNum)}
      />
      <Button
        className={styles.createPlayerButton}
        text={'Create Player'}
        onClick={() => createPlayer(playerName, playerNum)}
      />
    </div>
  );
};

NewPlayer.propTypes = {
  createPlayer: func.isRequired
};

export default NewPlayer;
