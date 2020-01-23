import React, { useContext, useEffect } from 'react';
import { object, func } from 'prop-types';
import { keys } from 'ramda';
import { ThemeContext } from '../App/App';
import themes from '../../styles/themes';
import styles from './Settings.module.scss';

const Settings = ({ remoteThemes, getRemoteThemes }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const swatches = { ...themes, ...remoteThemes };

  useEffect(() => {
    getRemoteThemes();
  }, [getRemoteThemes]);

  return (
    <div className={styles.settings}>
      {keys(swatches).map(key => {
        const { name, normal, light } = swatches[key];
        return (
          <div
            key={key}
            className={[
              styles.swatch,
              name === theme.name ? styles.selected : ''
            ].join(' ')}
            style={{ background: light || normal }}
            onClick={() => setTheme(swatches[key])}
          ></div>
        );
      })}
    </div>
  );
};

Settings.propTypes = {
  remoteThemes: object,
  getRemoteThemes: func.isRequired
};

export default Settings;
