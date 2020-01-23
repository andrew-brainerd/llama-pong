import { push } from 'connected-react-router';
import { setPageTitle } from './pong';

export const navTo = path => async dispatch => {
  dispatch(push(path));
};
