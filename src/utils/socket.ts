import { io } from 'socket.io-client';

const URL = 'http://localhost:9090';
export const socket = io(URL);
