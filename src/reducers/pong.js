import { NUM_GAMES } from '../constants/pong';
import {
  SET_PAGE_TITLE,
  UPDATE_CONFIG,
  START_GAME,
  UPDATE_SCORE
} from '../actions/pong';

const initialState = {
  isGameOver: false,
  config: {
    [NUM_GAMES]: 1
  },
  scoreboard: {
    currentScore: {
      player1: 0,
      player2: 0
    }
  }
};

export default function pong (state = initialState, action) {
  switch (action.type) {
    case SET_PAGE_TITLE:
      return {
        ...state,
        pageTitle: action.title
      };
    case UPDATE_CONFIG:
      return {
        ...state,
        config: {
          ...state.config,
          [action.key]: action.value
        }
      };
    case START_GAME:
      return {
        ...state,
        scoreboard: {
          currentScore: {
            player1: action.player1 || 0,
            player2: action.player2 || 0
          }
        }
      };
    case UPDATE_SCORE:
      return {
        ...state,
        scoreboard: {
          currentScore: {
            ...state.scoreboard.currentScore,
            [`player${action.playerNum}`]: action.newScore
          }
        }
      };
    default:
      return state;
  }
};
