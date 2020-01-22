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
        const { name, dark, normal, light } = themes[key];
        return (
          <div
            key={key}
            className={[
              styles.theme,
              name === theme.name ? styles.selected : ''
            ].join(' ')}
            onClick={() => setTheme(themes[key])}
          >
            <div className={styles.name}>{name}</div>
            <div className={styles.swatch} style={{ background: normal }}></div>
          </div>
        );
      })}
    </div>
  );
};

export default Settings;
