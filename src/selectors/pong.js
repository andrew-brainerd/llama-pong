import { path } from 'ramda';

export const getConfiguration = path(['pong', 'config']);

export const getScoreboard = path(['pong', 'scoreboard']);

export const getPageTitle = path(['pong', 'pageTitle']);
