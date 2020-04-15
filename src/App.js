import React from 'react';
import './App.css';
import NavbarComponent from './components/navbar/navbar-component';
import BannerComponent from "./components/banner/banner-components";


function App() {
  return (
    <div className="App">
      <NavbarComponent/>
        <BannerComponent/>
    </div>
  );
}

export default App;
