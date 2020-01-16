import { connect } from 'react-redux';
import { navTo } from '../../../actions/routing';
import { updateScore } from '../../../actions/pong';
import Scoreboard from './Scoreboard';

const mapDispatchToProps = dispatch => ({
  navTo: (path, title) => dispatch(navTo(path, title)),
  updateScore: (playerNum, newScore) => dispatch(updateScore(playerNum, newScore))
});

export default connect(null, mapDispatchToProps)(Scoreboard);
