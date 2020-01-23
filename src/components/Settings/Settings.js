import React, { useContext } from 'react';
import { keys } from 'ramda';
import { ThemeContext } from '../App/App';
import themes from '../../styles/themes';
import styles from './Settings.module.scss';

const Settings = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={styles.settings}>
      {keys(themes).map(key => {
        const { name, normal, light } = themes[key];
        return (
          <div
            key={key}
            className={[
              styles.swatch,
              name === theme.name ? styles.selected : ''
            ].join(' ')}
            style={{ background: light || normal }}
            onClick={() => setTheme(themes[key])}
          ></div>
        );
      })}
    </div>
  );
};

export default Settings;
