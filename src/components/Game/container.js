import { connect } from 'react-redux';
import { compose } from 'ramda';
import withSizes from 'react-sizes';
import { getPathname } from '../../selectors/routing';
import { getScoreboard, getIsLoadingGame } from '../../selectors/pong';
import { loadGame } from '../../actions/pong';
import Game from './Game';

const mapSizesToProps = ({ height }) => ({ height });

const mapStateToProps = state => ({
  pathname: getPathname(state),
  scoreboard: getScoreboard(state),
  isLoadingGame: getIsLoadingGame(state)
});

const mapDispatchToProps = dispatch => ({
  loadGame: gameId => dispatch(loadGame(gameId))
});

export default compose(
  withSizes(mapSizesToProps),
  connect(mapStateToProps, mapDispatchToProps)
)(Game);
