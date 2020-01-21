import { connect } from 'react-redux';
import { playAgain } from '../../../actions/pong';
import GameOver from './GameOver';

const mapDispatchToProps = dispatch => ({
  playAgain: () => dispatch(playAgain())
});

export default connect(null, mapDispatchToProps)(GameOver);
