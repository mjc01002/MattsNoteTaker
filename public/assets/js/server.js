const express = require('express');
const app = express();
app.listen(3002, () => {
    console.log(`API server now on port 3001!`);
  });

const { notes } = require('./data/notes');

app.get('/api/notes', (req, res) => {
  res.json(notes);
 });

