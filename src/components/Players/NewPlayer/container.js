import { connect } from 'react-redux';
import { createPlayer } from '../../../actions/pong';
import NewPlayer from './NewPlayer';

const mapDispatchToProps = dispatch => ({
  createPlayer: playerName => dispatch(createPlayer(playerName))
});

export default connect(null, mapDispatchToProps)(NewPlayer);
