import { handleResponse } from './tools';

const basicJsonHeader = { 'Content-Type': 'application/json' };

const LLAMA_PONG_API_URL = process.env.REACT_APP_LLAMA_PONG_API_URL || 'http://localhost:5000';

export const createGame = async (player1, player2) => {
  const response = await fetch(`${LLAMA_PONG_API_URL}/api/games`, {
    method: 'POST',
    headers: basicJsonHeader,
    body: JSON.stringify({ player1, player2 })
  });

  handleResponse(response, 201);
  const game = await response.json();

  return game;
};

export const getGame = async gameId => {
  const response = await fetch(`${LLAMA_PONG_API_URL}/api/games/${gameId}`, {
    method: 'GET',
    headers: basicJsonHeader
  });

  handleResponse(response);
  const game = await response.json();

  return game;
};

export const updateScore = async (gameId, player1, player2) => {
  const response = await fetch(`${LLAMA_PONG_API_URL}/api/games/${gameId}`, {
    method: 'PUT',
    headers: basicJsonHeader,
    body: JSON.stringify({ player1, player2 })
  });

  handleResponse(response);
  const game = await response.json();

  return game;
};

export const createPlayer = async playerName => {
  const response = await fetch(`${LLAMA_PONG_API_URL}/api/players`, {
    method: 'POST',
    headers: basicJsonHeader,
    body: JSON.stringify({ name: playerName })
  });

  handleResponse(response, 201);
  const player = await response.json();

  return player;
};

export const getPlayer = async playerId => {
  const response = await fetch(`${LLAMA_PONG_API_URL}/api/players/${playerId}`, {
    method: 'GET',
    headers: basicJsonHeader
  });

  handleResponse(response);
  const player = await response.json();

  return player;
};
