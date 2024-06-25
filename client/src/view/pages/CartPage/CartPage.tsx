import img from '../../../assests/images/about.jpg';

export const CartPage = () => {
    return (
        <section className={"w-[100%] pt-32 pb-28 bg-slate-100"}>
            <div className={"ml-10"}>
                <h1 className={"text-3xl font-bold "}>Your Cart Items</h1>

                <div className={"mr-10 mt-12 justify-between w-3/6"}>

                    {/*card*/}
                    <div className={"w-full rounded-lg h-40 flex mb-4 bg-white shadow-md p-1"}>
                        <img src={img} alt="" className={"h-full w-auto border-2 border-black p-2 rounded"}/>
                        <div className={"text-[18px] ml-12"}>
                            <h3>Book Name</h3>
                            <h3 className={"mt-3"}>Author</h3>
                            <h3 className={"mt-3"}>Price</h3>
                            <h3 className={"mt-3"}>Quantity</h3>
                        </div>
                        <div className={"ml-[300px]"}>
                            <h3 className={"text-[18px]"}>Total</h3>
                            <button className="transition-all bg-red-500 text-white px-6 py-2 rounded-lg border-red-600 mt-20
                        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px]
                        active:brightness-90 active:translate-y-[2px]">
                                Delete
                            </button>
                        </div>
                    </div>

                    {/*summary*/}
                    <div className={"w-2/6 bg-white h-auto absolute right-10 top-52"}>
                        <div className={"h-1/4 bg-cyan-300 p-0.5 text-2xl font-medium text-center"}>Summary</div>
                        <div className={"h-1/4  p-0.5 text-[18px] mt-2 border-b"}>Date</div>
                        <div className={"h-1/4  p-0.5 text-[18px] mt-2 border-b"}>Total Items</div>
                        <div className={"h-1/4  p-0.5 text-[18px] mt-2 border-b"}>Total Price</div>

                        <button className="transition-all bg-red-500 text-white px-6 py-2 rounded-lg border-red-600 w-full mt-10
                        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px]
                        active:brightness-90 active:translate-y-[2px]">
                            Payment
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};