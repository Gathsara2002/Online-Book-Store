import cart from '../../../assests/icons/cart.png';
import fav from '../../../assests/icons/favourite.png';

export function CartAndFav() {
    return (
        <section className={"flex border border-red-600 w-60 h-14 mt-[80px] absolute right-0"}>

            {/*Favourite*/}
            <div className={"w-1/2 flex border border-black"}>
                <img src={fav} alt="fav" className={"w-10 h-10 m"}/>
                <h3 className={"ml-2"}>0</h3>
            </div>

            {/*Cart*/}
            <div className={"w-1/2 flex border border-black"}>
                <img src={cart} alt="cart" className={"w-10 h-10"}/>
                <h3 className={"ml-2"}>0</h3>
            </div>
        </section>
    );
}