import { connect } from 'react-redux';
import { startGame } from '../../../actions/pong';
import GameOver from './GameOver';

const mapDispatchToProps = dispatch => ({
  playAgain: () => dispatch(startGame())
});

export default connect(null, mapDispatchToProps)(GameOver);
