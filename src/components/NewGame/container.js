import { connect } from 'react-redux';
import { NUM_GAMES, PLAYER1, PLAYER2 } from '../../constants/pong';
import { getConfiguration, getIsCreatingGame } from '../../selectors/pong';
import { navTo } from '../../actions/routing';
import { setPlayer, updateConfig, createGame } from '../../actions/pong';
import NewGame from './NewGame';

const mapStateToProps = state => ({
  numGames: getConfiguration(state)[NUM_GAMES],
  player1: getConfiguration(state)[PLAYER1],
  player2: getConfiguration(state)[PLAYER2],
  isCreatingGame: getIsCreatingGame(state)
});

const mapDispatchToProps = dispatch => ({
  navTo: path => dispatch(navTo(path)),
  setPlayer: (playerNum, playerId) => dispatch(setPlayer(playerNum, playerId)),
  updateConfig: (key, value) => dispatch(updateConfig(key, value)),
  createGame: (player1, player2) => dispatch(createGame(player1, player2))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewGame);
