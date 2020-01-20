import { push } from 'connected-react-router';
import { setPageTitle } from './pong';

export const navTo = (path, title) => async dispatch => {
  dispatch(setPageTitle(title));
  dispatch(push(path));
};
