import {NavBar} from "../NavBar/NavBar";
import {CartAndFav} from "../CartAndFav/CartAndFav";
import {Home} from "../../pages/Home/Home";
import {Footer} from "../Footer/Footer";

export const DefaultView = () => {
    return (
        <>
            <NavBar></NavBar>
            <CartAndFav></CartAndFav>
            <Home></Home>
            <Footer></Footer>
        </>
    );
};