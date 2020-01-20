import React, { useState } from 'react';
import { func } from 'prop-types';
import TextInput from '../../common/TextInput/TextInput';
import Button from '../../common/Button/Button';
import styles from './NewUser.module.scss';

const NewUser = ({ createPlayer }) => {
  const [playerName, setPlayerName] = useState('');

  return (
    <div className={styles.newUser}>
      <TextInput
        placeholder={'Enter a user name'}
        onChange={setPlayerName}
        onPressEnter={() => createPlayer(playerName)}
      />
      <Button
        className={styles.createPlayerButton}
        text={'Create Player'}
        onClick={() => createPlayer(playerName)}
      />
    </div>
  );
};

NewUser.propTypes = {
  createPlayer: func.isRequired
};

export default NewUser;
