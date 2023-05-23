'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// Appication
const app = express();
app.get('/', (req, res) => {
  res.send('FERRY IBNU AL FARUQ - 3120510802');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
