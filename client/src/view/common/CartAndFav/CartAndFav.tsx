import cart from '../../../assests/icons/cart.png';
import fav from '../../../assests/icons/favourite.png';
import {Link} from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "../../../context/CartContext";

export function CartAndFav() {

    const { cartItems } = useContext(CartContext);
    const cartCount = cartItems.length;

    return (
        <section className={"container flex w-60 h-14 fixed right-0 top-[85px]"}>

            {/*Favourite*/}
            <div className={"w-1/2 flex cursor-pointer"}>
                <Link to={"/wishlist"}>
                    <img src={fav} alt="fav" className={"w-8 h-8 ml-12 mt-2"}/>
                </Link>
                <h3 className={"ml-2"}>0</h3>
            </div>

            {/*Cart*/}
            <div className={"w-1/2 flex cursor-pointer"}>
                <Link to={"/cart"}>
                    <img src={cart} alt="cart" className={"w-8 h-8 ml-5 mt-2"}/>
                </Link>
                <h3 className={"ml-2"}>{cartCount}</h3>
            </div>
        </section>
    );
}