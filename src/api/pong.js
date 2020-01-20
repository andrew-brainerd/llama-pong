import { handleResponse } from './tools';

const basicJsonHeader = { 'Content-Type': 'application/json' };

const LLAMA_PONG_API_URL = process.env.REACT_APP_LLAMA_PONG_API_URL || 'http://localhost:5000';

export const createGame = async name => {
  const response = await fetch(`${LLAMA_PONG_API_URL}/api/game`, {
    method: 'POST',
    headers: basicJsonHeader,
    body: JSON.stringify({ name })
  });

  handleResponse(response, 201);
  const json = await response.json();

  return json;
};

export const createPlayer = async playerName => {
  const mockPlayer = {
    playerId: '0',
    name: playerName
  };

  return mockPlayer;
};

export const getPlayer = async playerId => {
  const mockPlayer = {
    playerId: '0',
    name: 'A. Brainerd'
  };

  return mockPlayer;
};
