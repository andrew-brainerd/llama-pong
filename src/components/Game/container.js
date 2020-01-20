import { connect } from 'react-redux';
import { compose } from 'ramda';
import withSizes from 'react-sizes';
import { getScoreboard } from '../../selectors/pong';
import Game from './Game';

const mapSizesToProps = ({ height }) => ({ height });

const mapStateToProps = state => ({
  scoreboard: getScoreboard(state)
});

export default compose(
  withSizes(mapSizesToProps),
  connect(mapStateToProps)
)(Game);
