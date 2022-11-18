const express = require("express");
const { ApolloServer } = require('apollo-server-express');

const path = require('path');
const cors = require("cors");

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});


const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
<<<<<<< .merge_file_a17460
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
=======
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
>>>>>>> .merge_file_a00436
});

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Server Runing on port ${PORT}`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
}

startApolloServer(typeDefs, resolvers);