//this app starts a server and listens on port 3000 for connections
//it will then responds with "Lusanda Mavuma" for requests in this route
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'));


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});