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
  UPDATING_SCORE,
  SCORE_UPDATED,
  START_GAME,
  RESET_PLAYERS,
  LOADING_THEMES,
  THEMES_LOADED
} from '../actions/pong';

const initialState = {
  isGameOver: false,
  isCreatingGame: false,
  isNewGame: true,
  isLoadingGame: false,
  isUpdatingScore: false,
  isCreatingPlayer: false,
  config: {
    [NUM_GAMES]: 1
  },
  gameId: null,
  scoreboard: {
    currentScore: {
      [PLAYER1]: 0,
      [PLAYER2]: 0
    }
  },
  themes: {}
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
        gameId: action.game.gameId,
        config: {
          ...state.config,
          [PLAYER1]: action.game.player1,
          [PLAYER2]: action.game.player2
        },
        scoreboard: {
          currentScore: {
            [PLAYER1]: action.game.player1.score,
            [PLAYER2]: action.game.player1.score
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
            [PLAYER1]: action.player1 || 0,
            [PLAYER2]: action.player2 || 0
          }
        }
      };
    case UPDATING_SCORE:
      return {
        ...state,
        isUpdatingScore: true
      };
    case SCORE_UPDATED:
      return {
        ...state,
        isUpdatingScore: false,
        scoreboard: {
          currentScore: {
            ...state.scoreboard.currentScore,
            [`player${action.playerNum}`]: action.newScore
          }
        }
      };
    case RESET_PLAYERS:
      return {
        ...state,
        config: {
          [PLAYER1]: null,
          [PLAYER2]: null
        }
      };
    case LOADING_THEMES:
      return {
        ...state,
        isLoadingThemes: true
      };
    case THEMES_LOADED:
      return {
        ...state,
        isLoadingThemes: false,
        themes: action.themes
      };
    default:
      return state;
  }
};
