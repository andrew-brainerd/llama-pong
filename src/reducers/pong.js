import { NUM_GAMES, PLAYER1, PLAYER2 } from '../constants/pong';
import {
  SET_PAGE_TITLE,
  UPDATE_CONFIG,
  CREATING_GAME,
  GAME_CREATED,
  LOADING_GAME,
  GAME_LOADED,
  CREATING_PLAYER,
  PLAYER_CREATED,
  UPDATE_SCORE,
  START_GAME
} from '../actions/pong';

const initialState = {
  isGameOver: false,
  isCreatingGame: false,
  isLoadingGame: false,
  isCreatingPlayer: false,
  config: {
    [NUM_GAMES]: 1
  },
  gameId: null,
  scoreboard: {
    currentScore: {
      player1: 0,
      player2: 0
    }
  }
};

export default function pong(state = initialState, action) {
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
    case CREATING_GAME:
      return {
        ...state,
        isCreatingGame: true
      };
    case GAME_CREATED:
      return {
        ...state,
        isCreatingGame: false,
        gameId: action.gameId
      };
    case LOADING_GAME:
      return {
        ...state,
        isLoadingGame: true
      };
    case GAME_LOADED:
      return {
        ...state,
        isLoadingGame: false,
        config: {
          ...state.config,
          [PLAYER1]: action.game.player1,
          [PLAYER2]: action.game.player2
        },
        scoreboard: {
          currentScore: {
            player1: action.game.player1.score,
            player2: action.game.player1.score
          }
        }
      };
    case CREATING_PLAYER:
      return {
        ...state,
        isCreatingPlayer: true
      };
    case PLAYER_CREATED:
      return {
        ...state,
        isCreatingPlayer: false
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
