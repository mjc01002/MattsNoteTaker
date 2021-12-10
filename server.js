const express = require('express');
const fs = require("fs");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//const apiRoutes = require('./routes/apiRoutes');
//const htmlRoutes = require('./routes/htmlRoutes');

require('./routes/routes')(app);
////require('./routes/routes')(app);
//app.use(apiRoutes);
//app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
