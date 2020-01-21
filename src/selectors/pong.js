import { compose, path, pathEq, pathOr, prop } from 'ramda';

export const getIsCreatingGame = pathEq(true, ['pong', 'isCreatingGame']);

export const getIsLoadingGame = pathEq(true, ['pong', 'isLoadingGame']);

export const getIsCreatingPlayer = pathEq(true, ['pong', 'isCreatingPlayer']);

export const getConfiguration = pathOr({}, ['pong', 'config']);

export const getGameId = path(['pong', 'gameId']);

export const getScoreboard = path(['pong', 'scoreboard']);

export const getCurrentScore = compose(prop('currentScore'), getScoreboard);

export const getPageTitle = path(['pong', 'pageTitle']);
