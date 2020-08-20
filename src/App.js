import React from 'react';
import './App.css';
import './scss/main.scss';
import Topbar from './components/topbar';
import Header from './components/header';


import Footer from './components/footer';
import EndPage from './components/end-page';
import CricleContact from './components/contact/cricle_contact';
import BoxChat from './components/contact/box_chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './view/home';
import AirTicket from './view/ airTicket';
import DealHotel from './view/deal_hotel';
import Luxury from './view/luxury';


function App() {


  return (
    <Router>
      <div className="App">
        <Topbar></Topbar>
        <Header></Header>
        <Switch>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/airticket" exact component={AirTicket}></Route>
          <Route path="/deal-hotel" exact component={DealHotel}></Route>
          <Route path="/luxury" exact component={Luxury}></Route>
        </Switch>
        <CricleContact></CricleContact>
        <BoxChat></BoxChat>
        <Footer></Footer>
        <EndPage></EndPage>

      </div>

    </Router>
  );
}

export default App;
