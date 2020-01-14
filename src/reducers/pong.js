import { SET_PAGE_TITLE, START_GAME, UPDATE_SCORE } from '../actions/pong';

const initialState = {
  isGameOver: false,
  scoreboard: {
    player1: 10,
    player2: 9
  }
};

export default function pong (state = initialState, action) {
  switch (action.type) {
    case SET_PAGE_TITLE:
      return {
        ...state,
        pageTitle: action.title
      };
    case START_GAME:
      return {
        ...state,
        scoreboard: {
          player1: action.player1 || 0,
          player2: action.player2 || 0
        }
      };
    case UPDATE_SCORE:
      return {
        ...state,
        [state.scoreboard[action.player]]: action.newScore
      };
    default:
      return state;
  }
};
