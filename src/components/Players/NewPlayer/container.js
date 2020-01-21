import { connect } from 'react-redux';
import { getIsCreatingPlayer } from '../../../selectors/pong';
import { createPlayer } from '../../../actions/pong';
import NewPlayer from './NewPlayer';

const mapStateToProps = state => ({
  isCreatingPlayer: getIsCreatingPlayer(state)
});

const mapDispatchToProps = dispatch => ({
  createPlayer: playerName => dispatch(createPlayer(playerName))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPlayer);
