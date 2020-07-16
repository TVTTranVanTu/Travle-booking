import React from 'react';
import './App.css';
import './scss/main.scss';
import Topbar from './components/topbar';
import Header from './components/header';
import slider1 from './assets/img/slider1.png';
import slider2 from './assets/img/slider2.png';
import slider3 from './assets/img/slider3.png';
import slider4 from './assets/img/slider4.png';
import SliderShow from './components/slider/sliderShow';

const collection = [
  { src: slider1, caption: "Caption one" },
  { src: slider2, caption: "Caption two" },
  { src: slider3, caption: "Caption three" },
  { src: slider4, caption: "Caption four" },
];

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Header></Header>
      <SliderShow input={collection}
        timeout={`3000`}></SliderShow>
    </div>
  );
}

export default App;
