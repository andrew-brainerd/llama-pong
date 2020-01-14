export const SET_PAGE_TITLE = 'SET_PAGE_TITLE';
export const START_GAME = 'START_GAME';
export const UPDATE_SCORE = 'UPDATE_SCORE';

export const setPageTitle = title => ({ type: SET_PAGE_TITLE, title });

export const startGame = message => ({ type: START_GAME, message });

export const updateScore = (player, newScore) => ({ type: UPDATE_SCORE, player, newScore });
