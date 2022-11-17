import React from "react";
import { Routes, Route } from "react-router-dom";



import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';








<<<<<<<<< Temporary merge branch 1

=========
import NavBar from "./components/NavBar"
>>>>>>>>> Temporary merge branch 2
import HoT from "./components/headsOrTails";
import HoL from './pages/HoL';
import RPS from "./components/rockPaperScissors";
import Home from "./pages/Home";
import Login from "./pages/Login"
<<<<<<<<< Temporary merge branch 1
import Nav from "./components/Nav";
import { useState } from "react";
=========
import Footer from "./components/Footer"
// import Nav from "./components/Nav";
// import { useState } from "react";
>>>>>>>>> Temporary merge branch 2
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
<<<<<<<<< Temporary merge branch 1
  let [user, setUser] = useState(null);
=========
>>>>>>>>> Temporary merge branch 2

  return (
    <ApolloProvider client={client}>

<<<<<<<<< Temporary merge branch 1
      <div className="flex-column justify-flex-start min-100-vh">
        <Nav user={user} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
=========
      <div className="flex-column justify-flex-start min-100-vh bg-dark">
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
>>>>>>>>> Temporary merge branch 2
            <Route path="/signup" element={<Signup />} />
            <Route path="/RPS" element={<RPS />} />
            <Route path="/HoL" element={<HoL />} />
            <Route path="/HoT" element={<HoT />} />
          </Routes>
<<<<<<<<< Temporary merge branch 1
=========
          <Footer />
>>>>>>>>> Temporary merge branch 2
        </div>

    </ApolloProvider>
  );
};

export default App;
