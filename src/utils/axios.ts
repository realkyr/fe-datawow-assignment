import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3001',
});

request.interceptors.request.use((config) => {
  // if server side return config directly
  if (typeof window === 'undefined') {
    return config;
  }
  const username = localStorage.getItem('username');
  if (username) {
    config.headers['username'] = username;
  }
  return config;
});

export default request;
