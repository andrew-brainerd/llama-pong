import { isEmpty, keys } from 'ramda';

export const printResponse = response => console.log('Response: %o', response);

export const handleResponse = async (response, expected) => {
  if (response.status !== 200 && response.status !== expected) {
    console.error(`${response.status} [LLama Pong] Fetch Failed %o`, response);
  }
};

export const formatQueryString = options => {
  return (options && !isEmpty(options) &&
    `?${keys(options).map(option =>
      `${option}=${options[option]}`
    ).join('&')}`) || '';
};
