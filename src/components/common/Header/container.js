import { connect } from 'react-redux';
import { getPathname } from '../../../selectors/routing';
import { getCurrentUserId } from '../../../selectors/users';
import { getPageTitle } from '../../../selectors/pong';
import { navTo } from '../../../actions/routing';
import { HOME_ROUTE } from '../../../constants/routes';
import Header from './Header';

const mapStateToProps = state => ({
  isVisible: getPathname(state) !== HOME_ROUTE,
  pathname: getPathname(state),
  userId: getCurrentUserId(state),
  pageTitle: getPageTitle(state)
});

const mapDispatchToProps = dispatch => ({
  navTo: (path, title) => dispatch(navTo(path, title))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
