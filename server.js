const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
const { notes } = require('./data/notes');

app.get('/api/notes', (req, res) => {
  res.json(notes);
 });

 const express = require('express');


const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

