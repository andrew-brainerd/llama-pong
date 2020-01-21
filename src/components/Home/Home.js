import React from 'react';
import { func } from 'prop-types';
import { NEW_GAME_ROUTE, LOAD_GAME_ROUTE } from '../../constants/routes';
import Button from '../common/Button/Button';
import logo from '../../img/logo.png';
import styles from './Home.module.scss';

const Home = ({ navTo }) => (
  <div className={styles.home}>
    <h1>LLama Pong</h1>
    <div className={styles.logo}>
      <img src={logo} alt='LLama Pong Logo' />
    </div>
    <div className={styles.buttonContainer}>
      <Button
        className={styles.button}
        onClick={() => navTo(NEW_GAME_ROUTE, 'New Game')}
      >
        New Game
      </Button>
      <Button
        className={styles.button}
        onClick={() => navTo(LOAD_GAME_ROUTE, 'Load Existing Game')}
        disabled
      >
        Load Game
      </Button>
    </div>
  </div>
);

Home.propTypes = {
  navTo: func.isRequired
};

export default Home;
