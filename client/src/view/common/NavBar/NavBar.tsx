import logo from '../../../assests/icons/logo-s.png';

export function NavBar() {
    return (
        <section className={"flex w-full border border-black h-20 align-middle fixed items-center top-0 right-0"}>

            {/*This is nav bar icon*/}
            <img src={logo} alt="logo" className={"border border-red-600 w-28 h-16 object-contain ml-10"}/>

            {/*navigation items*/}
            <ul className="flex w-1/2 border border-red-600 text-center items-center justify-evenly text-[20px]
                            font-serif mx-auto">
                <li className={"border border-green-400 cursor-pointer"}>Home</li>
                <li className={"border border-green-400 cursor-pointer"}>About</li>
                <li className={"border border-green-400 cursor-pointer"}>Shop</li>
                <li className={"border border-green-400 cursor-pointer"}>Contact</li>
            </ul>

            {/*login and sign up buttons*/}
            <div className={"flex h-12 border border-red-600"}>
                <button className={"border border-green-400 w-36"}>Login</button>
                <button className={"border border-green-400 w-36"}>Sign Up</button>
            </div>

        </section>
    );
}