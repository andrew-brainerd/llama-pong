import * as pong from '../api/pong';
import { PLAYER1, PLAYER2 } from '../constants/pong';

export const SET_PAGE_TITLE = 'SET_PAGE_TITLE';
export const LOADING_PLAYER = 'LOADING_PLAYER';
export const PLAYER_LOADED = 'PLAYER_LOADED';
export const UPDATE_CONFIG = 'UPDATE_CONFIG';
export const START_GAME = 'START_GAME';
export const UPDATE_SCORE = 'UPDATE_SCORE';

export const setPageTitle = title => ({ type: SET_PAGE_TITLE, title });

export const loadingPlayer = { type: LOADING_PLAYER };

export const playerLoaded = player => ({ type: PLAYER_LOADED, player });

export const updateConfig = (key, value) => ({ type: UPDATE_CONFIG, key, value });

export const startGame = (options, message) => ({ type: START_GAME, ...options, message });

export const updateScore = (playerNum, newScore) => ({ type: UPDATE_SCORE, playerNum, newScore });

export const setPlayer = (playerNum, playerId) => async dispatch => {
  dispatch(loadingPlayer);
  pong.getPlayer(playerId).then(player => {
    dispatch(updateConfig(playerNum === 1 ? PLAYER1 : PLAYER2, player))
  });
};
