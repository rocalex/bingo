// server.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const client_router = require('./routes/api/v1/client_router');
const admin_router = require('./routes/api/v1/admin_router');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
  }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/v1/client', client_router);
app.use('/api/v1/admin', admin_router);

module.exports = app