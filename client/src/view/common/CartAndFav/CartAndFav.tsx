import cart from '../../../assests/icons/cart.png';
import fav from '../../../assests/icons/favourite.png';

export function CartAndFav() {
    return (
        <section className={"container flex w-60 h-14 absolute right-0 top-[85px]"}>

            {/*Favourite*/}
            <div className={"w-1/2 flex cursor-pointer"}>
                <img src={fav} alt="fav" className={"w-8 h-8 ml-12 mt-2"}/>
                <h3 className={"ml-2"}>0</h3>
            </div>

            {/*Cart*/}
            <div className={"w-1/2 flex cursor-pointer"}>
                <img src={cart} alt="cart" className={"w-8 h-8 ml-5 mt-2"}/>
                <h3 className={"ml-2"}>0</h3>
            </div>
        </section>
    );
}