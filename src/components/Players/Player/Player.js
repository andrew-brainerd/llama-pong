import React from 'react';
import { string } from 'prop-types';
import styles from './Player.module.scss';

const Player = ({ name }) => {
  return (
    <div className={styles.player}>
      {name}
    </div>
  );
};

Player.propTypes = {
  name: string
};

export default Player;
