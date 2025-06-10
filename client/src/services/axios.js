import axios from 'axios';
import server_url from './serverUrl';
console.log(server_url,"hbdjwkbwgu");

const API = axios.create({
  baseURL: server_url, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;