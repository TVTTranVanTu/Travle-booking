import React from 'react';
import './App.css';
import './scss/main.scss';
import Topbar from './components/topbar';
import Header from './components/header';


import Home from './view/home';
import Footer from './components/footer';
import EndPage from './components/end-page';
import CricleContact from './components/contact/cricle_contact';
import BoxChat from './components/contact/box_chat';


function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Header></Header>
      <CricleContact></CricleContact>
      <BoxChat></BoxChat>
      <Home></Home>
      <Footer></Footer>
      <EndPage></EndPage>
    </div>
  );
}

export default App;
