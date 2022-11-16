import React from "react";
import { Routes, Route } from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';








import NavBar from "./components/NavBar"
import HoT from "./components/headsOrTails";
import HoL from './pages/HoL';
import RPS from "./components/rockPaperScissors";
import Home from "./pages/Home";
import Login from "./pages/Login"
// import Nav from "./components/Nav";
// import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./pages/Signup";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

const App = () => {

  return (
    <ApolloProvider client={client}>

      <div className="flex-column justify-flex-start min-100-vh bg-dark">
        <NavBar /> 
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/RPS" element={<RPS />} />
            <Route path="/HoL" element={<HoL />} />
            <Route path="/HoT" element={<HoT />} />
          </Routes>
        </div>
      </div>

    </ApolloProvider>
  );
};

export default App;
