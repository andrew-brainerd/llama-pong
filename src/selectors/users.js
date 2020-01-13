import { compose, path, prop } from 'ramda';

export const getCurrentUser = path(['users', 'currentUser']);

export const getCurrentUserId = compose(prop('_id'), getCurrentUser);

export const getCurrentUserName = compose(prop('name'), getCurrentUser);
