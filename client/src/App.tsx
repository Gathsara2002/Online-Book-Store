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
import {CartPage} from "./view/pages/CartPage/CartPage";
import {WishList} from "./view/pages/WishList/WishList";
import {DefaultView} from "./view/common/DefaultView/DefaultView";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            {/*<NavBar></NavBar>*/}
            {/*<CartAndFav></CartAndFav>*/}
            {/*<Home></Home>*/}
            {/*<About></About>*/}
            {/*<Contact></Contact>*/}
            {/*<Product></Product>*/}
            {/*<Login></Login>*/}
            {/*<Signup></Signup>*/}
            {/*<ItemTemplate></ItemTemplate>*/}
            {/*<CartPage></CartPage>*/}
            {/*<WishList></WishList>*/}
            {/*<Footer></Footer>*/}
            <BrowserRouter>
                <Routes>
                    <Route path={"/*"} Component={DefaultView}> </Route>
                    <Route path={"/login"} Component={Login}> </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
