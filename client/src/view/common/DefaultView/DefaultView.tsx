import {NavBar} from "../NavBar/NavBar";
import {CartAndFav} from "../CartAndFav/CartAndFav";
import {Home} from "../../pages/Home/Home";
import {Footer} from "../Footer/Footer";
import {Route, Routes} from "react-router-dom";
import React from "react";
import {About} from "../../pages/About/About";
import {Product} from "../../pages/Product/Product";
import {Contact} from "../../pages/Contact/Contact";
import {CartPage} from "../../pages/CartPage/CartPage";
import {WishList} from "../../pages/WishList/WishList";

export const DefaultView = () => {
    return (
        <>
            <NavBar></NavBar>
            <CartAndFav></CartAndFav>
            <Routes>
                <Route path={"/"} Component={Home}> </Route>
                <Route path={"/about"} Component={About}> </Route>
                <Route path={"/shop"} Component={Product}> </Route>
                <Route path={"/contact"} Component={Contact}> </Route>
                <Route path={"/cart"} Component={CartPage}> </Route>
                <Route path={"/wishlist"} Component={WishList}> </Route>
            </Routes>
            <Footer></Footer>
        </>
    );
};