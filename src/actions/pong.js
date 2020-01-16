export const SET_PAGE_TITLE = 'SET_PAGE_TITLE';
export const UPDATE_CONFIG = 'UPDATE_CONFIG';
export const START_GAME = 'START_GAME';
export const UPDATE_SCORE = 'UPDATE_SCORE';

export const setPageTitle = title => ({ type: SET_PAGE_TITLE, title });

export const updateConfig = (key, value) => ({ type: UPDATE_CONFIG, key, value });

export const startGame = (options, message) => ({ type: START_GAME, ...options, message });

export const updateScore = (playerNum, newScore) => ({ type: UPDATE_SCORE, playerNum, newScore });
