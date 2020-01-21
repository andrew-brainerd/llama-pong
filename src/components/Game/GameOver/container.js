import { connect } from 'react-redux';
import { getConfiguration } from '../../../selectors/pong';
import { PLAYER1, PLAYER2 } from '../../../constants/pong';
import { playAgain } from '../../../actions/pong';
import GameOver from './GameOver';

const mapStateToProps = state => ({
  player1: getConfiguration(state)[PLAYER1],
  player2: getConfiguration(state)[PLAYER2]
});

const mapDispatchToProps = dispatch => ({
  playAgain: () => dispatch(playAgain())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
