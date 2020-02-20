const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');
const { setupDB } = require('./config/databaseConnection');
const cors = require('cors');
const app = express();
const port = 4000

setupDB(v => console.log(v));

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