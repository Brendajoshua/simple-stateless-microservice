const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

const authRouter = require('./auth/auth-router')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api', authRouter);

server.use(express.static(path.join(__dirname, 'client/build')));

server.get('/', (req, res) => {
    res.sendFile(__dirname + "/client/build/index.html");
});

module.exports = server;