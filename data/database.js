const mongodb = require('mongodb');
const mongoose= require('mongoose');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect('mongodb+srv://asmitraj7998:asmit7998@cluster0.hh3lmlf.mongodb.net/');
 database = client.db('online_shop');
}

function getDb() {
  if (!database) {
    throw new Error('You must connect first!');
  }

  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb
};