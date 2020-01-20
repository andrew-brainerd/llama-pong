import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import notify from './notify';
import pong from './pong';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  notify,
  pong
});

export default rootReducer;
