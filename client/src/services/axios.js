import axios from 'axios';
import server_url from './serverUrl';

const API = axios.create({
  baseURL: server_url, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;