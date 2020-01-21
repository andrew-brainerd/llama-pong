import { connect } from 'react-redux';
import { getConfiguration } from '../../../selectors/pong';
import { PLAYER1, PLAYER2 } from '../../../constants/pong';
import { playAgain, resetPlayers } from '../../../actions/pong';
import { navTo } from '../../../actions/routing';
import GameOver from './GameOver';

const mapStateToProps = state => ({
  player1: getConfiguration(state)[PLAYER1],
  player2: getConfiguration(state)[PLAYER2]
});

const mapDispatchToProps = dispatch => ({
  playAgain: () => dispatch(playAgain()),
  navTo: path => dispatch(navTo(path)),
  resetPlayers: () => dispatch(resetPlayers)
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
