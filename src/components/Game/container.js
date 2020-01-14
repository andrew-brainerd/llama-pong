import { connect } from 'react-redux';
import { compose } from 'ramda';
import withSizes from 'react-sizes';
import { getScoreboard } from '../../selectors/pong';
import { navTo } from '../../actions/routing';
import Game from './Game';

const mapSizesToProps = ({ height }) => ({ height });

const mapStateToProps = state => ({
  scoreboard: getScoreboard(state)
});

const mapDispatchToProps = dispatch => ({
  navTo: path => dispatch(navTo(path))
});

export default compose(
  withSizes(mapSizesToProps),
  connect(mapStateToProps, mapDispatchToProps)
)(Game);
