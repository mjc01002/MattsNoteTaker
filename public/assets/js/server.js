const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
const { notes } = require('./data/notes');

app.get('/api/notes', (req, res) => {
  res.json(notes);
 });

