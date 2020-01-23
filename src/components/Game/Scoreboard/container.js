import { connect } from 'react-redux';
import { getConfiguration } from '../../../selectors/pong';
import { PLAYER1, PLAYER2 } from '../../../constants/pong';
import { navTo } from '../../../actions/routing';
import { updateScore } from '../../../actions/pong';
import Scoreboard from './Scoreboard';

const mapStateToProps = state => ({
  player1: getConfiguration(state)[PLAYER1],
  player2: getConfiguration(state)[PLAYER2]
});

const mapDispatchToProps = dispatch => ({
  navTo: path => dispatch(navTo(path)),
  updateScore: (playerNum, newScore) => dispatch(updateScore(playerNum, newScore))
});

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);
