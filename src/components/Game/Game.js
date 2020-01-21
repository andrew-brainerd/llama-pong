import React, { useState, useEffect } from 'react';
import { number, string, shape, bool, func } from 'prop-types';
import { getGameStatus } from '../../utils/scoring';
import GameOver from './GameOver/container';
import Scoreboard from './Scoreboard/container';
import styles from './Game.module.scss';

const HEADER_HEIGHT = 120;

const getGameId = pathname => pathname.split('/')[2];

const Game = ({ height, pathname, scoreboard, isLoadingGame, loadGame }) => {
  const [gameStatus, setGameStatus] = useState({});
  const scoreBoardHeight = height - HEADER_HEIGHT;

  useEffect(() => {
    !isLoadingGame && loadGame(getGameId(pathname));
  }, [pathname]);

  useEffect(() => {
    const gameStatus = getGameStatus(scoreboard);
    console.log(`Game Status: %o`, gameStatus);
    setGameStatus(gameStatus);
  }, [scoreboard]);

  return gameStatus.isGameOver ?
    <GameOver winningPlayerNum={gameStatus.winningPlayerNum} /> :
    <div className={styles.game}>
      <Scoreboard height={scoreBoardHeight} {...scoreboard} />
    </div>;
};

Game.propTypes = {
  height: number,
  pathname: string,
  scoreboard: shape({
    currentScore: shape({
      player1: number,
      player2: number
    })
  }),
  isLoadingGame: bool,
  loadGame: func.isRequired
};

export default Game;
