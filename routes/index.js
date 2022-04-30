const routes = require('express').Router();


routes.get('/', (req, res) => {
    res.send('Mpho Franky');
  });


module.exports = routes;

const mongodb = require('./db');


  mongodb.getDb()
    .db()
    .collection('your_collection_name')