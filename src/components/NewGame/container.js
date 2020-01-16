import { connect } from 'react-redux';
import { NUM_GAMES } from '../../constants/pong';
import { getConfiguration } from '../../selectors/pong';
import { navTo } from '../../actions/routing';
import { updateConfig, startGame } from '../../actions/pong';
import NewGame from './NewGame';

const mapStateToProps = state => ({
  numGames: getConfiguration(state)[NUM_GAMES]
});

const mapDispatchToProps = dispatch => ({
  navTo: (path, title) => dispatch(navTo(path, title)),
  updateConfig: (key, value) => dispatch(updateConfig(key, value)),
  startGame: options => dispatch(startGame(options))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewGame);
