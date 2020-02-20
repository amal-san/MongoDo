const MongoClient = require('mongodb').MongoClient;

let mongoDB;

const setupDB = callback => {
  const uri = 'mongodb+srv://amalsan:pass@clustor0-a3uoq.mongodb.net/test?retryWrites=true&w=majority'
  

  MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      if (err) {
        return callback(err);
      }
      else {
        return callback('MongoDB is OK');
      }
      mongoDB = client.db("full-stack-server");
      
    }
  );
};

const getDB = () => {
  return mongoDB;
};

module.exports = { setupDB, getDB };

