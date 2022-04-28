const dotenv = require('dotenv');
dotenv.config();
const mongoClient = require('mongodb').MongoClient;

const mongoDBIP = '192.168.1.71';
const mongoDBPort = 27017;

const mongoURL = 'mongodb://<mongo admin>:<password>@'+`${mongoDBIP}`+':'+`${mongoDBPort}`;
//to replace password and myfirstDatabase with the name of the database connted to
const mongoURL2 = 'mongodb+srv://lusyluh:<password>@cluster0.pb9oq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

let _db;

const initDb = callback => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  mongoClient .connect(mongoURL)
    .then(client => {
      _db = client;
      callback(null, _db);
    })
    .catch(err => {
      callback(err);
    });
};
const getDb = () => {
    if (!_db) {
      throw Error('Db not initialized');
    }
    return _db;
  };
  
  module.exports = {
    initDb,
    getDb
  };