import { connect } from 'react-redux';
import { navTo } from '../../actions/routing';
import Home from './Home';

const mapDispatchToProps = dispatch => ({
  navTo: (path, title) => dispatch(navTo(path, title))
});

export default connect(null, mapDispatchToProps)(Home);
