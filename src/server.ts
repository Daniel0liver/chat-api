import express from 'express';

import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

import { routes } from 'routes';
import 'database';

const app = express();

const http = createServer(app); // Creating http protocol
const io = new Server(http); // Creating ws protocol

app.use(express.json());
app.use(routes);

app.listen(3333);
