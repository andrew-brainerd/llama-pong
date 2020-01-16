import { connect } from 'react-redux';
import { NUM_GAMES, PLAYER1, PLAYER2 } from '../../constants/pong';
import { getConfiguration } from '../../selectors/pong';
import { navTo } from '../../actions/routing';
import { updateConfig, startGame } from '../../actions/pong';
import NewGame from './NewGame';

const mapStateToProps = state => ({
  numGames: getConfiguration(state)[NUM_GAMES],
  player1: getConfiguration(state)[PLAYER1],
  player2: getConfiguration(state)[PLAYER2]
});

const mapDispatchToProps = dispatch => ({
  navTo: (path, title) => dispatch(navTo(path, title)),
  updateConfig: (key, value) => dispatch(updateConfig(key, value)),
  startGame: options => dispatch(startGame(options))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewGame);
