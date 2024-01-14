import logo from '../../../assests/icons/logo.png';
import {Link} from "react-router-dom";

export function NavBar() {
    return (
        <section
            className={"container flex w-full h-20 align-middle fixed items-center top-0 right-0 bg-white shadow-lg shadow-gray-400 z-50"}>

            {/*This is nav bar icon*/}
            <img src={logo} alt="logo" className={"rounded w-28 h-16 object-contain ml-10"}/>

            {/*navigation items*/}
            <ul className="flex w-1/2 text-center items-center justify-evenly text-[20px] font-serif mx-auto">

                <li className={"cursor-pointer hover:text-[#f53b57] hover:scale-110 transition-all"}>
                    <Link to={"/"}>Home</Link>
                </li>

                <li className={"cursor-pointer hover:text-[#f53b57] hover:scale-110 transition-all"}>
                    <Link to={"/about"}>About</Link>
                </li>

                <li className={"cursor-pointer hover:text-[#f53b57] hover:scale-110 transition-all"}>
                    <Link to={"/shop"}>Shop</Link>
                </li>

                <li className={"cursor-pointer hover:text-[#f53b57] hover:scale-110 transition-all"}>
                    <Link to={"/contact"}>Contact</Link>
                </li>

            </ul>

            {/*login and sign up buttons*/}
            <div className={"flex h-12 mr-10 w-60 justify-between"}>
                <button className="transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 w-28
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                    <Link to={"/login"}>LOGIN</Link>
                </button>

                <button className="transition-all bg-red-500 text-white px-6 py-2 rounded-lg border-red-600 w-28
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                    <Link to={"/signup"}>SIGNUP</Link>
                </button>
            </div>

        </section>
    );
}