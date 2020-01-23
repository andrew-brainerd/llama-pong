import { connect } from 'react-redux';
import { getThemes } from '../../selectors/pong';
import { getRemoteThemes } from '../../actions/pong';
import Settings from './Settings';

const mapStateToProps = state => ({
  remoteThemes: getThemes(state)
});

const mapDispatchToProps = dispatch => ({
  getRemoteThemes: () => dispatch(getRemoteThemes())
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
