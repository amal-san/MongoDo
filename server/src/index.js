const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000
const graphqlHTTP = require('express-graphql');
const { setupDB } = require('./config/databaseConnection')

setupDB(v => console.log(v));


const schema = {
  // we will add this later
};

app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true
  })
);

app.listen(port);
console.log('Server is listening in %s',port);