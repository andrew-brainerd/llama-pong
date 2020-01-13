import { connect } from 'react-redux';
import { navTo } from '../../actions/routing';
import Game from './Game';

const mapDispatchToProps = dispatch => ({
  navTo: path => dispatch(navTo(path))
});

export default connect(null, mapDispatchToProps)(Game);
