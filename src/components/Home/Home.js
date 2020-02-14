import React, { useContext, useState } from 'react';
import { func } from 'prop-types';
import { ThemeContext } from '../App/App';
import { NEW_GAME_ROUTE, LOAD_GAME_ROUTE } from '../../constants/routes';
import Header from '../common/Header/container';
import AppIcon from '../common/AppIcon/AppIcon';
import Button from '../common/Button/Button';
import styles from './Home.module.scss';
import SettingsModal from '../SettingsModal/SettingsModal';

const Home = ({ navTo }) => {
  const { theme } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header />
      <div className={styles.home}>
        <h1 style={{ color: theme.light }}>LLama Pong</h1>
        <div className={styles.logo}>
          <AppIcon />
        </div>
        <div className={styles.buttonContainer}>
          <Button
            className={styles.button}
            text={'New Game'}
            onClick={() => navTo(NEW_GAME_ROUTE)}
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
            onClick={() => navTo(LOAD_GAME_ROUTE)}
            disabled
          />
        </div>
        {isModalOpen &&
          <SettingsModal
            closeModal={() => setIsModalOpen(false)}
          />}
      </div>
    </>
  );
};

Home.propTypes = {
  navTo: func.isRequired
};

export default Home;
