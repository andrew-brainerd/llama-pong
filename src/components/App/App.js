import React, { useState } from 'react';
import { object } from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import themes from '../../styles/themes';
import Header from '../common/Header/container';
import {
  HOME_ROUTE,
  NEW_GAME_ROUTE,
  GAME_ROUTE
} from '../../constants/routes';
import Home from '../Home/container';
import NewGame from '../NewGame/container';
import Game from '../Game/container';
import styles from './App.module.scss';

export const ThemeContext = React.createContext({
  theme: {},
  setTheme: () => { }
});

const App = ({ history }) => {
  const [theme, setTheme] = useState(themes.purple);

  return (
    <div className={styles.app}>
      <ConnectedRouter history={history}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Header />
          <div className={styles.content}>
            <Switch>
              <Route path={HOME_ROUTE} exact component={Home} />
              <Route path={NEW_GAME_ROUTE} exact component={NewGame} />
              <Route path={GAME_ROUTE} exact component={Game} />
            </Switch>
          </div>
        </ThemeContext.Provider>
      </ConnectedRouter >
    </div>
  );
};

App.propTypes = {
  history: object.isRequired
};

export default App;
