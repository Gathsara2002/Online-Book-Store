import React from 'react';
import './App.css';
import {NavBar} from "./view/common/NavBar/NavBar";
import {CartAndFav} from "./view/common/CartAndFav/CartAndFav";

function App() {
  return (
      <>
        <NavBar></NavBar>
        <CartAndFav></CartAndFav>
      </>
  );
}

export default App;
