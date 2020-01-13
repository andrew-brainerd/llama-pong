import { connect } from 'react-redux';
import { navTo } from '../../actions/routing';
import NewGame from './NewGame';

const mapDispatchToProps = dispatch => ({
  navTo: path => dispatch(navTo(path))
});

export default connect(null, mapDispatchToProps)(NewGame);
