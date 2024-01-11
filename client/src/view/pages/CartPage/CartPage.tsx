import img from '../../../assests/images/about.jpg';

export const CartPage = () => {
    return (
        <section className={"container mt-32"}>
            <div className={"ml-10"}>
                <h1 className={"text-3xl font-bold "}>Your Cart Items</h1>

                {/*card*/}
                <div className={"flex border border-blue-700 h-40 mr-10 mt-10 justify-between"}>
                    <div className={"w-3/6 border border-black h-40 flex"}>
                        <img src={img} alt="" className={"h-full w-auto border border-red-600 p-2 rounded"}/>
                        <div className={"text-[18px] ml-12"}>
                            <h3>Book Name</h3>
                            <h3 className={"mt-3"}>Author</h3>
                            <h3 className={"mt-3"}>Price</h3>
                            <h3 className={"mt-3"}>Quantity</h3>
                        </div>
                        <div className={"ml-[300px]"}>
                            <h3 className={"text-[18px]"}>Total</h3>
                            <button className={"mt-24"}>Delete</button>
                        </div>
                    </div>

                    {/*summary*/}
                    <div className={"w-2/6 border border-red-600 h-40"}></div>
                </div>
            </div>
        </section>
    );
};