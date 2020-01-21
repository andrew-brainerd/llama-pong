import { path, pathEq, pathOr } from 'ramda';

export const getIsCreatingGame = pathEq(true, ['pong', 'isCreatingGame']);

export const getConfiguration = pathOr({}, ['pong', 'config']);

export const getScoreboard = path(['pong', 'scoreboard']);

export const getPageTitle = path(['pong', 'pageTitle']);
