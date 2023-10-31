import axios from 'axios';

const BASE_URL = 'http://localhost:9000/api';
const Token = localStorage.getItem('token');
const token = JSON.parse(Token);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const privateRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${token}` },
});
