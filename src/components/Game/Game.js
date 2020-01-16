import React, { useState, useEffect } from 'react';
import { number, shape } from 'prop-types';
import { useSpeechSynthesis } from 'react-speech-kit';
import { getGameStatus } from '../../utils/scoring';
import GameOver from './GameOver/container';
import Scoreboard from './Scoreboard/container';
import styles from './Game.module.scss';

const gameStartMessage = 'Lets get the game started!';
const HEADER_HEIGHT = 120;

const Game = ({ height, scoreboard }) => {
  const [isNewGame, setIsNewGame] = useState(true);
  const [gameStatus, setGameStatus] = useState({});
  const { speak } = useSpeechSynthesis();
  const scoreBoardHeight = height - HEADER_HEIGHT;

  useEffect(() => {
    if (isNewGame) {
      speak({ text: gameStartMessage });
      console.log(`%c${gameStartMessage}`, 'color: orange; font-size: 24px');
      setIsNewGame(false);
    }
  }, [isNewGame, speak]);

  useEffect(() => {
    setGameStatus(getGameStatus(scoreboard));
  }, [scoreboard]);

  return gameStatus.isGameOver ?
    <GameOver winningPlayerNum={gameStatus.winningPlayerNum} /> :
    <div className={styles.game}>
      <Scoreboard height={scoreBoardHeight} {...scoreboard} />
    </div>;
};

Game.propTypes = {
  height: number,
  scoreboard: shape({
    currentScore: shape({
      player1: number,
      player2: number
    })
  })
};

export default Game;
