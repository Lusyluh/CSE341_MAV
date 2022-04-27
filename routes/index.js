const routes = require('express').Router();


routes.get('/', (req, res) => {
    res.send('Mpho Franky');
  });


module.exports = routes;