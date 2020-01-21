import { connect } from 'react-redux';
import { updateConfig } from '../../../actions/pong';
import TempPlayer from './TempPlayer';

const mapDispatchToProps = dispatch => ({
  updateConfig: (key, value) => dispatch(updateConfig(key, value))
});

export default connect(null, mapDispatchToProps)(TempPlayer);
