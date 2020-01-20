import { connect } from 'react-redux';
import { setPlayer } from '../../../actions/pong';
import UserModal from './UserModal';

const mapDispatchToProps = dispatch => ({
  setPlayer: (playerNum, playerId) => dispatch(setPlayer(playerNum, playerId))
});

export default connect(null, mapDispatchToProps)(UserModal);
