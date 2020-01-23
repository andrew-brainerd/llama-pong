import React, { useContext, useState } from 'react';
import { func } from 'prop-types';
import { ThemeContext } from '../App/App';
import { NEW_GAME_ROUTE, LOAD_GAME_ROUTE } from '../../constants/routes';
import Button from '../common/Button/Button';
import logo from '../../img/logo.png';
import styles from './Home.module.scss';
import SettingsModal from '../SettingsModal/SettingsModal';

const Home = ({ navTo }) => {
  const { theme } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.home}>
      <h1 style={{ color: theme.light }}>LLama Pong</h1>
      <div className={styles.logo}>
        <img src={logo} alt='LLama Pong Logo' />
      </div>
      <div className={styles.buttonContainer}>
        <Button
          className={styles.button}
          text={'New Game'}
          onClick={() => navTo(NEW_GAME_ROUTE, 'New Game')}
        />
        <Button
          className={[styles.button, styles.settings].join(' ')}
          text={'Settings'}
          onClick={() => {
            setIsModalOpen(true);
          }}
          applyTheme={false}
        />
        <Button
          className={styles.button}
          text={'Load Game'}
          onClick={() => navTo(LOAD_GAME_ROUTE, 'Load Existing Game')}
          disabled
        />
      </div>
      {isModalOpen &&
        <SettingsModal
          closeModal={() => setIsModalOpen(false)}
        />}
    </div>
  );
};

Home.propTypes = {
  navTo: func.isRequired
};

export default Home;
