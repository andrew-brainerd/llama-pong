import { connect } from 'react-redux';
import { createPlayer } from '../../../actions/pong';
import NewUser from './NewUser';

const mapDispatchToProps = dispatch => ({
  createPlayer: playerName => dispatch(createPlayer(playerName))
});

export default connect(null, mapDispatchToProps)(NewUser);
