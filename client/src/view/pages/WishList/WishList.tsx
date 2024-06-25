import img from "../../../assests/images/about.jpg";

export const WishList = () => {
    return (
        <section className={"w-[100%] pt-32 pb-32 bg-slate-100"}>
            <div>
                <h1 className={"text-3xl font-bold ml-20"}>Your WishList</h1>

                {/*list*/}
                <div className={"ml-20 mr-20 mt-10 grid grid-cols-7 bg-white shadow-md shadow-gray-400 pb-3"}>

                    {/*headings*/}
                    <div className={"col-span-2 font-bold text-[18px] text-center p-3"}>
                        Item
                    </div>
                    <div className={"font-bold text-[18px] text-center p-3"}>
                        Price
                    </div>
                    <div className={"col-span-2"}></div>
                    <div className={"col-span-2"}></div>


                    {/*items*/}
                    <div className={"col-span-2 p-5 items-center border-t border-black"}>
                        <img src={img} alt="" className={"h-24 object-contain"}/>
                        <h3 className={"relative inline-block left-32 bottom-16"}>Name</h3>
                    </div>
                    <div className={"flex justify-center items-center border-t border-black p-5"}>
                        Price
                    </div>
                    <div className={"col-span-2 flex justify-center items-center border-t border-black p-5"}>
                        <button className="transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 w-40 uppercase
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                            Add To Cart
                        </button>
                    </div>
                    <div className={"col-span-2 flex justify-center items-center border-t border-black p-5"}>
                        <button className="transition-all bg-red-500 text-white px-6 py-2 rounded-lg border-red-600 w-40
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                            REMOVE
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};