import React from 'react';
import './App.css';
import './scss/main.scss';
import Topbar from './components/topbar';
import Header from './components/header';


import Home from './view/home';


function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
