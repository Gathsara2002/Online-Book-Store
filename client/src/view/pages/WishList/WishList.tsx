import img from "../../../assests/images/about.jpg";

export const WishList = () => {
    return (
        <section className={"container mt-32"}>
            <div>
                <h1 className={"text-3xl font-bold ml-20"}>Your WishList</h1>

                {/*list*/}
                <div className={"ml-20 mr-20 mt-10 border border-black grid grid-cols-7 gap-3"}>

                    {/*headings*/}
                    <div className={"col-span-2 border border-red-600"}>
                        Item
                    </div>
                    <div className={"border border-red-600"}>
                        Price
                    </div>
                    <div className={"col-span-2 border border-red-600"}>
                        <button>Add To Cart</button>
                    </div>
                    <div className={"col-span-2 border border-red-600"}>
                        <button>Remove</button>
                    </div>


                    {/*items*/}
                    <div className={"col-span-2 border border-red-600"}>
                        <img src={img} alt="" className={"h-32 object-contain"}/>
                    </div>
                    <div className={"border border-red-600"}>
                        Price
                    </div>
                    <div className={"col-span-2 border border-red-600"}>
                        <button>Add To Cart</button>
                    </div>
                    <div className={"col-span-2 border border-red-600"}>
                        <button>Remove</button>
                    </div>
                </div>

            </div>
        </section>
    );
};