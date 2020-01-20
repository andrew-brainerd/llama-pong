import { connect } from 'react-redux';
import { setPlayer } from '../../../actions/pong';
import PlayerModal from './PlayerModal';

const mapDispatchToProps = dispatch => ({
  setPlayer: (playerNum, playerId) => dispatch(setPlayer(playerNum, playerId))
});

export default connect(null, mapDispatchToProps)(PlayerModal);
