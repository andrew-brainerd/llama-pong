import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import notify from './notify';
import pong from './pong';
import users from './users';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  notify,
  pong,
  users
});

export default rootReducer;
