//?data=HelloWorld&amp;size=100x100

import { handleResponse, formatQueryString } from './tools';

const basicJsonHeader = { 'Content-Type': 'application/json' };

const QR_CODE_API_URL = 'https://api.qrserver.com/v1/create-qr-code/';

export const createCode = async playerId => {
  const options = {
    data: playerId,
    size: '200x200'
  };

  const response = await fetch(`${QR_CODE_API_URL}${formatQueryString(options)}`, {
    method: 'GET'
  });

  handleResponse(response);
  const json = await response.json();

  return json;
};

export const getPlayer = async playerId => {
  const mockPlayer = {
    _id: '0',
    name: 'A. Brainerd'
  };

  return mockPlayer;
};
