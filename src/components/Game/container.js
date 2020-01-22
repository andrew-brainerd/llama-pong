import { connect } from 'react-redux';
import { compose } from 'ramda';
import withSizes from 'react-sizes';
import { getPathname } from '../../selectors/routing';
import { PLAYER1, PLAYER2 } from '../../constants/pong';
import { getConfiguration, getScoreboard, getIsLoadingGame, getIsNewGame } from '../../selectors/pong';
import { loadGame } from '../../actions/pong';
import Game from './Game';

const mapSizesToProps = ({ height }) => ({ height });

const mapStateToProps = state => ({
  pathname: getPathname(state),
  player1: getConfiguration(state)[PLAYER1],
  player2: getConfiguration(state)[PLAYER2],
  scoreboard: getScoreboard(state),
  isLoadingGame: getIsLoadingGame(state),
  isNewGame: getIsNewGame(state)
});

const mapDispatchToProps = dispatch => ({
  loadGame: gameId => dispatch(loadGame(gameId))
});

export default compose(
  withSizes(mapSizesToProps),
  connect(mapStateToProps, mapDispatchToProps)
)(Game);
