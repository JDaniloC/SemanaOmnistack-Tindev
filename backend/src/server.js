const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv/config');

const routes = require('./routes');

const server = express();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true
})

server.use(cors());
server.use(express.json());
server.use(routes);

const PORT = process.env.PORT || 3333;
server.listen(PORT, () => {
    console.log('Server listening on port', PORT)
});