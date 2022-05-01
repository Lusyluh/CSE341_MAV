
const express = require('express');
//connection to the mongo database
const mongodb = require('./db/connect');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

mongodb.initDb((err, mongodb ) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected on DB and Server running on port ${port}`);
  }
});