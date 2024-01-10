import React from 'react';
import './App.css';
import {NavBar} from "./view/common/NavBar/NavBar";
import {CartAndFav} from "./view/common/CartAndFav/CartAndFav";
import {Home} from "./view/pages/Home/Home";
import {Footer} from "./view/common/Footer/Footer";
import {About} from "./view/pages/About/About";
import {Contact} from "./view/pages/Contact/Contact";
import {Product} from "./view/pages/Product/Product";
import {Login} from "./view/pages/Login/Login";
import {Signup} from "./view/pages/Signup/Signup";
import {ItemTemplate} from "./view/common/ItemTemplate/ItemTemplate";

function App() {
    return (
        <>
            <NavBar></NavBar>
            <CartAndFav></CartAndFav>
            {/*<Home></Home>*/}
            {/*<About></About>*/}
            {/*<Contact></Contact>*/}
            {/*<Product></Product>*/}
            {/*<Footer></Footer>*/}
            {/*<Login></Login>*/}
            {/*<Signup></Signup>*/}
            <ItemTemplate></ItemTemplate>
        </>
    );
}

export default App;
