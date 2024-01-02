import React from 'react';
import './App.css';
import {NavBar} from "./view/common/NavBar/NavBar";
import {CartAndFav} from "./view/common/CartAndFav/CartAndFav";
import {Home} from "./view/pages/Home/Home";
import {Footer} from "./view/common/Footer/Footer";

function App() {
    return (
        <>
            <NavBar></NavBar>
            <CartAndFav></CartAndFav>
            <Home></Home>
            <Footer></Footer>
        </>
    );
}

export default App;
