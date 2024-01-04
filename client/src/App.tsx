import React from 'react';
import './App.css';
import {NavBar} from "./view/common/NavBar/NavBar";
import {CartAndFav} from "./view/common/CartAndFav/CartAndFav";
import {Home} from "./view/pages/Home/Home";
import {Footer} from "./view/common/Footer/Footer";
import {About} from "./view/pages/About/About";
import {Contact} from "./view/pages/Contact/Contact";

function App() {
    return (
        <>
            <NavBar></NavBar>
            <CartAndFav></CartAndFav>
            {/*<Home></Home>*/}
            {/*<About></About>*/}
            <Contact></Contact>
            {/*<Footer></Footer>*/}
        </>
    );
}

export default App;
