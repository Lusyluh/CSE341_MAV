const routes = require('express').Router();
const mongodb = require('mongodb');
const userController = require('../controllers/user');


routes.get('/', (req, res) => {
    res.send('Mpho Franky');
  });

routes.get('/', userController.getUser);
routes.get('/username', userController.getUsername);

module.exports = routes;