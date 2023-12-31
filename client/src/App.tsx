import React from 'react';
import './App.css';
import {NavBar} from "./view/common/NavBar/NavBar";
import {CartAndFav} from "./view/common/CartAndFav/CartAndFav";
import {Home} from "./view/common/Home/Home";

function App() {
    return (
        <>
            <NavBar></NavBar>
            <CartAndFav></CartAndFav>
            <Home></Home>
        </>
    );
}

export default App;
