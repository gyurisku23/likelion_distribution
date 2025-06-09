
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://shopping-website-server.onrender.com/',  // 백엔드 서버 주소
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0'
  },
});

export default instance;   
